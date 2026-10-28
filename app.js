// City Hospital Appointment Booking Logic
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointmentForm");
    const confirmBox = document.getElementById("bookingConfirmation");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("patientName").value;
            const dept = document.getElementById("department").value;
            const date = document.getElementById("appointmentDate").value;

            confirmBox.className = "alert-success";
            confirmBox.innerHTML = `✓ Appointment confirmed for <strong>${name}</strong> in <strong>${dept}</strong> on <strong>${date}</strong>.`;
            form.reset();
        });
    }
});