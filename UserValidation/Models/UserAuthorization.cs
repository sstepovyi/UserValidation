using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace UserValidation.Models
{
    public class UserAuthorization
    {
        private const string UserName= "Test";
        private const int UserPass= 1234;

        public static bool IsAutorized(string name, int pass)
        {
            if (name == UserName && pass == UserPass)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        
    }
}