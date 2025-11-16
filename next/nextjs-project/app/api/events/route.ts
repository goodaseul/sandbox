import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import Event from "@/app/database/event.model";
import connectDB from "@/lib/mongodb";

export async function POST(req: NextRequest) {
    // → /api/events 라우트에 POST 요청이 들어오면

    // DB 연결하고

    // Event 모델로 DB에 새 문서를 만들도록 함.

    // 요청이 들어오면 route.ts의 POST함수가 실행
    try {
        await connectDB(); // 요청받음 - DB 연결

        // 데이터 꺼냄 - 클라이언트가 보낸 데이터 꺼내기
        const formData = await req.formData();
        let event;
        try {
            event = Object.fromEntries(formData.entries());
        } catch (e) {
            return NextResponse.json(
                { message: "Invalid JSON data format" },
                {
                    status: 400,
                }
            );
        }

        const file = formData.get("image") as File;

        if (!file) {
            return NextResponse.json({ message: "Image file is required" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream({ resource_type: "image", folder: "DevEvent" }, (error, results) => {
                    if (error) return reject(error);
                    resolve(results);
                })
                .end(buffer);
        });
        event.image = (uploadResult as { secure_url: string }).secure_url;

        // DB연결 - 모델(Event)에 데이터 넣어서 DB에 저장
        const createdEvent = await Event.create(event);

        // DB작업 - 응답보내기  - 잘 저장이 됐는지
        return NextResponse.json(
            { message: "Event created successfuly", event: createdEvent },
            {
                status: 201,
            }
        );
    } catch (e) {
        console.log(e);
        return NextResponse.json(
            {
                message: "Event Creatoin Failed",
                error: e instanceof Error ? e.message : "UnKnown",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET() {
    try {
        await connectDB();

        const events = await Event.find().sort({ createdAt: -1 });

        return NextResponse.json({ message: "Events fetched successfully", events }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ message: "Event fetchin failed", error: e }, { status: 500 });
    }
}

// a route that accepts a slug as input => returns the event details
