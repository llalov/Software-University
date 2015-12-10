using System;

namespace P2_BankOfKurtovoKonare.Interfaces
{
    interface IInterest
    {
        decimal CalculateInterest(decimal money, int months);
    }
}
