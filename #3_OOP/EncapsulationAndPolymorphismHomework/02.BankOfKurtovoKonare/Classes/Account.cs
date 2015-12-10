using P2_BankOfKurtovoKonare.Interfaces;

namespace P2_BankOfKurtovoKonare.Classes
{
    abstract class Account : IInterest
    {
        //private Customer customer;
        //private decimal balance;
        //private decimal interestRate;

        public Customer User { get; set; }
        public decimal Balance { get; set; }
        public decimal InterestRate { get; set; }

        protected Account(Customer user, decimal balance, decimal interestRate)
        {
            this.User = user;
            this.Balance = balance;
            this.InterestRate = interestRate;
        }
        public abstract decimal CalculateInterest(decimal money, int months);

        public void DepositMoney(decimal moneyAmount)
        {
            this.Balance += moneyAmount;
        }
        public override string ToString()
        {
            return string.Format("Account type: {0}\n{1}Balance: {2:C2}\nInterest rate: {3}",
                this.GetType().Name, this.User, this.Balance, this.InterestRate);
        }
    }
}
