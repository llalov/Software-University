
namespace P2_BankOfKurtovoKonare.Classes
{
    class Loan : Account
    {
        public Loan(Customer user, decimal balance, decimal interestRate) : 
            base(user, balance, interestRate)
        {
            
        }
        public override decimal CalculateInterest(decimal money, int months)
        {
            if (this.User.GetType().Name == "Individual")
            {
                return ((money * this.InterestRate) / 12) * (months - 3);
            }
            else
            {
                return ((money*this.InterestRate)/12)*(months - 2);
            }
        }
    }
}
