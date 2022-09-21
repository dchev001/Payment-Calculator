function calculatePayment()
{
    pay = document.getElementById("hourly_pay").value;
    hours = document.getElementById("hour_work").value;

	if (hours > 40)
	{
        total = (pay * 40) + ((hours - 40) * pay * 1.5);
	}
	else
	{
		total = (pay * hours);
	}    
    
    document.getElementById("info").innerHTML = "<p>Total: $" + total + "</p>";
}
