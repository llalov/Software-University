using P2_BankOfKurtovoKonare.Interfaces;

namespace P2_BankOfKurtovoKonare.Classes
{
    class Deposit : Account, IWithdrawable
    {
        public Deposit(Customer user, decimal balance, decimal interestRate) : 
            base(user,balance,interestRate)
        {
            
        }
        public override decimal CalculateInterest(decimal money, int months)
        {
            if (this.Balance > 0 && this.Balance <= 1000)
            {
                return 0;
            }
            return ((money * this.InterestRate) / 12) * months;
        }

        public void WithdrawMoney(decimal moneyAmount)
        {
            this.Balance -= moneyAmount;
        }
    }
}
