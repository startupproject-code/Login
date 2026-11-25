# Login

เว็บตัวอย่างสำหรับให้ผู้ใช้เข้าสู่ระบบก่อนแสดงหน้า `Hello World` โดยตรวจสอบบัญชีจาก Google Spreadsheet ผ่าน Google Apps Script

## เตรียม Spreadsheet

1. สร้าง Google Spreadsheet และคัดลอก Spreadsheet ID จาก URL รูปแบบ `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
2. สร้างชีตชื่อ `Accounts`
3. กำหนดหัวตารางแถวแรก และข้อมูลบัญชีในคอลัมน์ A-B:

| A (username) | B (password) |
| --- | --- |
| username | password |
| admin | 1234 |

4. ใน `Code.gs` เปลี่ยนค่า `xxxxxxxxxxx` เป็น Spreadsheet ID จริง

## Deploy ด้วย Google Apps Script

1. ไปที่ [script.google.com](https://script.google.com/) แล้วสร้างโปรเจกต์ใหม่
2. วางเนื้อหาของ `Code.gs` ในไฟล์สคริปต์ และสร้างไฟล์ HTML ชื่อ `Index` แล้ววางเนื้อหาจาก `Index.html`
3. เลือก **Deploy → New deployment → Web app** ตั้งค่า **Execute as: Me** และกำหนดผู้มีสิทธิ์เข้าถึงตามต้องการ
4. Deploy และอนุญาตให้สคริปต์เข้าถึง Spreadsheet จากนั้นเปิด URL ของ Web app

หลังเข้าสู่ระบบสำเร็จจะแสดง `Hello World` และปุ่ม **กลับไปหน้า Login** ด้านล่าง ปุ่มนี้ล้างสถานะล็อกอินในหน่วยความจำของหน้าเว็บ ล้างช่องกรอก และแสดงหน้า Login อีกครั้ง

## หมายเหตุด้านความปลอดภัย

ตัวอย่างนี้เก็บรหัสผ่านเป็นข้อความธรรมดาใน Spreadsheet เพื่อการทดลองเท่านั้น ไม่ควรใช้รหัสผ่าน `1234` หรือวิธีจัดเก็บนี้ในระบบจริง ควรจำกัดสิทธิ์การเข้าถึง Spreadsheet/Web app ให้เหมาะสม และทราบว่าการซ่อนหน้าใน browser ไม่ใช่การควบคุมสิทธิ์สำหรับข้อมูลสำคัญ
