
namespace P2_BankOfKurtovoKonare.Classes
{
    class Company : Customer
    {
        //private string companyName;
        public string CompanyName { get; set; }

        public Company(string companyName)
        {
            this.CompanyName = companyName;
        }

        public override string GetName()
        {
            return this.CompanyName;
        }

        public override string ToString()
        {
            return base.ToString() + string.Format("Company name: {0}\n",
                this.CompanyName);
        }
    }
}
