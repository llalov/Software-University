
namespace P2_BankOfKurtovoKonare.Classes
{
    class Individual : Customer
    {
        //private string firstName;
        //private string lastName;
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Individual(string firstName, string lastName)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
        }
        //public void CalculateInterest()
        //{
        //    throw new NotImplementedException();
        //}
        public override string GetName()
        {
            return this.FirstName + " " + this.LastName;
        }
        public override string ToString()
        {
            return base.ToString() + string.Format("First name: {0}\nLast name: {1}\n",
                this.FirstName,this.LastName);
        }
    }
}
