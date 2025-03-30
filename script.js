def student_grade(marks):
    if marks > 79:
        return "A"
    elif marks >= 60:
        return "B"
    elif marks >= 50:
        return "C"
    elif marks >= 40:
        return "D"
    else:
        return "E"


def speed_detector(speed):
    speed_limit = 70
    if speed < speed_limit:
        return "Ok"
    else:
        points = (speed - speed_limit) // 5
        if points > 12:
            return "License suspended"
        return f"Points: {points}"


def net_salary_calculator(basic_salary, benefits):
    # Tax brackets (simplified KRA tax rates for illustration)
    tax_rate = 0.3 if basic_salary > 24000 else 0.2
    payee = basic_salary * tax_rate
    
    # NHIF Deductions (simplified for demonstration)
    nhif_deductions = 1500 if basic_salary > 50000 else 1000
    
    # NSSF Deductions (standard rate)
    nssf_deductions = min(basic_salary * 0.06, 2160)
    
    # Gross and Net Salary Calculation
    gross_salary = basic_salary + benefits
    net_salary = gross_salary - (payee + nhif_deductions + nssf_deductions)
    
    return {
        "Gross Salary": gross_salary,
        "Payee (Tax)": payee,
        "NHIF Deductions": nhif_deductions,
        "NSSF Deductions": nssf_deductions,
        "Net Salary": net_salary
    }

# Example usage:
# print(student_grade(85))
# print(speed_detector(80))
# print(net_salary_calculator(50000, 5000))
