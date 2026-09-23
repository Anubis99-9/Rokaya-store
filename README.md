# Rokaya Store

متجر بسيط جاهز للرفع.

## الملفات
- `index.html` واجهة المتجر
- `admin.html:<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>تسجيل الدخول</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>تسجيل الدخول للوحة التحكم</h2>
  <form action="/login" method="POST">
    <input type="text" name="omarakkari" placeholder="omarakkari" required>
    <input type="password" name="password" placeholder="omar71818030akkari" required>
    <button type="submit">دخول</button>
  </form>
</body>
</html> لوحة التحكم
- `app.js` وظائف المتجر
- `admin.js` وظائف لوحة التحكم
- `style.css` التصميم
- `server.js` خادم Node.js
- `package.json` إعداد التشغيل
- `store-data.json` بيانات أولية
- `store-image.svg` صورة افتراضية
- `README.md` التعليمات

## تشغيل محلي
```bash
npm install
npm start
```

## ملاحظة
الإعدادات والمنتجات في النسخة الحالية تُحفظ في متصفح الجهاز عبر localStorage. الدفع عند الاستلام يمكن تنفيذه عبر طلب واتساب، ولا توجد بوابة دفع إلكترونية مفعلة.
