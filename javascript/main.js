function calculatePayment()
{
    pay = document.getElementById("hourly_pay").value;
    hours = document.getElementById("hour_work").value;

    total = (pay * 40) + ((hours - 40) * pay * 1.5);
    document.getElementById("info").innerHTML = "<p>Total: $" + total + "</p>";
}
