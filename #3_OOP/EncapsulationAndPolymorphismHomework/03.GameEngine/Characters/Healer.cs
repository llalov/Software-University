using System;
using TheSlum;
using TheSlum.Interfaces;

namespace P3_GameEngine.Characters
{
    class Healer : Character, IHeal
    {
        public Healer(string id, int x, int y, Team team) : 
            base(id,x,y,75,50,team,6)
        {
            this.HealingPoints = 60;
        }
        public int HealingPoints { get; set; }

        public override Character GetTarget(System.Collections.Generic.IEnumerable<Character> targetsList)
        {
            throw new NotImplementedException();
        }

        public override void AddToInventory(Item item)
        {
            throw new NotImplementedException();
        }

        public override void RemoveFromInventory(Item item)
        {
            throw new NotImplementedException();
        }
    }
}
