using System;
using TheSlum;
using TheSlum.Interfaces;

namespace P3_GameEngine.Characters
{
    class Warrior : Character, IAttack
    {
        public Warrior(string id, int x, int y, Team team)
            : base(id,x,y,200,100,team,2)
        {
            this.AttackPoints = 150;
        }

        public int AttackPoints { get; set; }

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
