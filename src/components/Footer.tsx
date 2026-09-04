import type { FooterProps } from "../libs/Footer";

/*
 * อย่าลืมเปลี่ยน fullName และ studentId ให้เป็นของตัวเอง
 */
export default function Footer({year, fullname, studentId}: FooterProps) {
  return (
    <footer className="text-center w-100">
      <p className="text-white bg-secondary p-4 m-0">
        Copyright © {year} {fullname} {studentId}
      </p>
    </footer>
  );
}
