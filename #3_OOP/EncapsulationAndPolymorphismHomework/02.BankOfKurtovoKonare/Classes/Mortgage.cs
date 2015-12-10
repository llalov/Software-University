
namespace P2_BankOfKurtovoKonare.Classes
{
    class Mortgage : Account
    {
        public Mortgage(Customer user, decimal balance, decimal interestRate) : 
            base(user, balance, interestRate)
        {
            
        }
        public override decimal CalculateInterest(decimal money, int months)
        {
            if (this.User.GetType().Name == "Company")
            {
                int halfInterestMonths = months - 12;
                return ((money * this.InterestRate) / 12) * halfInterestMonths +
                       ((money * this.InterestRate) / 12) * (months - halfInterestMonths);
            }
            else
            {
                return money * (1 + this.InterestRate * (months - 6));
            }
        }
    }
}
