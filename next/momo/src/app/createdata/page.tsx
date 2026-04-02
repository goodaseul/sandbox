"use client";

import { useState } from "react";
import useCreateDataMutation from "../hook/features/useCreateDataMutation";
import { useRouter } from "next/navigation";

export default function CreateDataPage() {
  const { mutateAsync } = useCreateDataMutation();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    location: "",
    type: "",
    dateTime: "",
    registrationEnd: "",
    capacity: 5,
    image: null as File | null,
  });

  //   const handleSubmit = () => {
  //     mutate({
  //       name: form.name,
  //       location: form.location,
  //       type: form.type,
  //       dateTime: form.dateTime,
  //       registrationEnd: form.registrationEnd,
  //       capacity: form.capacity,
  //       image: form.image,
  //     });
  //   };
  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("location", form.location);
    formData.append("type", form.type);
    formData.append("dateTime", form.dateTime);
    formData.append("registrationEnd", form.registrationEnd);
    formData.append("capacity", String(form.capacity));

    if (form.image) {
      formData.append("image", form.image);
    }
    try {
      await mutateAsync(formData);
      router.push("/"); // ✅ 순서 보장
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1>Create Data</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <p>
            <input
              value={form.name}
              placeholder="이름 plz"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </p>
          <p>
            <select
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            >
              <option value="건대입구">건대입구</option>
              <option value="을지로3가">을지로3가</option>
              <option value="신림">신림</option>
              <option value="홍대입구">홍대입구</option>
            </select>
          </p>
          <p>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="DALLAEMFIT">DALLAEMFIT</option>
              <option value="OFFICE_STRETCHING">OFFICE_STRETCHING</option>
              <option value="MINDFULNESS">MINDFULNESS</option>
              <option value="WORKATION">WORKATION</option>
            </select>
          </p>
          <p>
            <input
              type="date"
              value={form.dateTime}
              onChange={(e) => setForm({ ...form, dateTime: e.target.value })}
            />
          </p>
          <p>
            <input
              type="date"
              value={form.registrationEnd}
              onChange={(e) =>
                setForm({ ...form, registrationEnd: e.target.value })
              }
            />
          </p>
          <p>
            <input
              type="range"
              min={5}
              value={form.capacity}
              onChange={(e) =>
                setForm({ ...form, capacity: Number(e.target.value) })
              }
            />
          </p>
          <p>
            <input
              type="file"
              //   value={form.image}
              onChange={(e) =>
                setForm({ ...form, image: e.target.files?.[0] || null })
              }
            />
          </p>
          <button type="submit" onSubmit={handleSubmit}>
            생성
          </button>
        </div>
      </form>
    </>
  );
}
