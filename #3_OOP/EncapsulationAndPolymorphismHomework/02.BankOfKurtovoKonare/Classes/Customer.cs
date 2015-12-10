namespace P2_BankOfKurtovoKonare.Classes
{
    abstract class Customer
    {
        //private string address;
        //private string phoneNumber;
        public abstract string GetName();
        public override string ToString()
        {
            return string.Format("Customer type: {0}\n",this.GetType().Name);
        }
    }
}
