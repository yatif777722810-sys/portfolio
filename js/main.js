function validateForm() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user.length < 5) {
        alert("اسم المستخدم يجب أن يكون 5 أحرف فأكثر");
        return false;
    }
    if (pass.length < 8) {
        alert("كلمة المرور يجب أن تكون 8 رموز فأكثر");
        return false;
    }
    alert("تم التسجيل بنجاح!");
    return true;
}
