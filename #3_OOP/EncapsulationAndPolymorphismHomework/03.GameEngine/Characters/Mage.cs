using System;
using TheSlum;
using TheSlum.Interfaces;

namespace P3_GameEngine.Characters
{
    class Mage : Character, IAttack
    {
        public Mage(string id, int x, int y, Team team) : base(id, x, y, 150, 50, team, 5)
        {
            this.AttackPoints = 300;
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
