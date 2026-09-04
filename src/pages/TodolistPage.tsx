import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import TaskInput from "../components/TaskInput";
import type { TaskCardProps } from "../libs/Todolist";

export default function TodolistPage() {
  const tasks: TaskCardProps[] = [
    {
      id: "1",
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false
    },
    {
      id: "2",
      title: "Write code",
      description: "Finish project for class",
      isDone: false
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: true
    },
  ];

  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        {/* ── 2) Sidebar (รับ props userName, type) ─────────────────────────── */}
        <div className="col-2 p-0">
          <Sidebar username="khachenchai" type="admin" />
        </div>

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          {/* ── 1) Header (ไม่รับ props) ────────────────────────────────────── */}
          <Header />

          <main className="flex-grow-1 p-4">
            <div className="container">
              <h2 className="text-center">Todo List</h2>
              <p className="text-center text-muted">ทั้งหมด {tasks.length} งาน</p>
              {/* ── 3) TaskInput (ไม่รับ props) ──────────────────────────── */}
              <TaskInput />

              {/* ── 4) Task (3 แถว) → แยกเป็น <TaskCard /> แล้ว .map() ─────── */}
              {tasks.map(t => <TaskCard key={t.id} id={t.id} title={t.title} description={t.description} isDone={t.isDone} />)}

            </div>
          </main>

          {/* ── 5) Footer (รับ props year, fullName, studentId) ─────────────── */}
          <Footer year="2026" fullname="Khachenchai Jaikla" studentId="680610657" />
        </div>
      </div>
    </div>
  );
}
