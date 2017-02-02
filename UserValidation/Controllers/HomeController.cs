using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UserValidation.Models;

namespace UserValidtion.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
          
        [HttpGet]
        public int CheckAutorization(string username,int userpassword)
        {
            return (UserAuthorization.IsAutorized(username, userpassword)) ? 1:0;         
        }
    }
}