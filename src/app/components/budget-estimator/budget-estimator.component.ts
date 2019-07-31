import {Component, OnInit} from '@angular/core';

interface CreditItem {
    type: CreditType;
    text: string;
    value: number;
    label: string;
}

enum CreditType {
    POOR,
    AVERAGE,
    GOOD,
    EXCELLENT
}

interface SelectItem {
    label: string;
    value: number;
}

const CREDIT_LIST: CreditItem[] = [
    {
        type: CreditType.POOR,
        text: 'Regardless of your credit score, we will help you get the vehicle you want!',
        value: 19.9,
        label: 'Poor'
    },
    {
        type: CreditType.AVERAGE,
        text: 'Our Online Pre-Approval Process is Fast, Easy and Very Convenient. ' +
            'No Hassles. Apply from the comfort of your home via any smartphone!',
        value: 12.9,
        label: 'Average'
    },
    {
        type: CreditType.GOOD,
        text: 'Approval Team is your most reliable partner in Auto Loan Pre-Approval. ' +
        'We will take care of you every step of the way and ensure that you get the vehicle of your dreams!',
        value: 6.9,
        label: 'Good'
    },
    {
        type: CreditType.EXCELLENT,
        text: 'With excellent credit, you are in control. ' +
        'Approval Team will make sure that your car financing application will be a breeze.',
        value: 3.49,
        label: 'Excellent'
    }];

const PAYMENT_SCHEDULE: SelectItem[] = [
    {
        value: 4,
        label: 'Weekly'
    },
    {
        value: 2,
        label: 'Bi-Weekly'
    },
    {
        value: 1,
        label: 'Monthly'
    }];

const DEFAULTS_SETTINGS = {
    AMOUNT_DEFAULT: 15000,
    AMOUNT_MIN: 5000,
    AMOUNT_MAX: 75000,
    AMOUNT_STEP: 500,
    MONTH_DEFAULT: 72,
    MONTH_MIN: 12,
    MONTH_MAX: 96,
    MONTH_STEP: 12
};

@Component({
    selector: 'app-budget-estimator',
    templateUrl: './budget-estimator.component.html',
    styleUrls: ['./budget-estimator.component.css']
})

export class BudgetEstimatorComponent implements OnInit {
    public SETTINGS = DEFAULTS_SETTINGS;
    public creditTypes: CreditItem[] = CREDIT_LIST;
    public paymentSchedule: SelectItem[] = PAYMENT_SCHEDULE;
    public state: any = {
        amount: DEFAULTS_SETTINGS.AMOUNT_DEFAULT,
        months: DEFAULTS_SETTINGS.MONTH_DEFAULT,
        rating: this.creditTypes[1],
        schedule: PAYMENT_SCHEDULE[1].value
    };
    public creditDescription: string;

    ngOnInit() {
        this.creditDescription = this.state.rating.text;
    }

    onAmountChange(e: any): void {
        this.state.amount = e.from;
    }

    onMonthChange(e: any): void {
        this.state.months = e.from;
    }

    onChangeCreditType(value: any): void {
        this.state.rating = value;
        this.creditDescription = value.text;
    }

    calculateTotalPayment(): number {
        const result: number = +((this.state.amount * (this.state.rating.value * 0.01 / 12)) /
            (1 - (Math.pow(1 + (this.state.rating.value * 0.01 / 12), -this.state.months)))).toFixed(2);
        return this.normalizePaymentFormat(result / this.state.schedule);
    }

    normalizePaymentFormat(value): any {
        value = +value;
        let payment: any = Math.round(value);
        payment = payment.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        return payment;
    }
}
