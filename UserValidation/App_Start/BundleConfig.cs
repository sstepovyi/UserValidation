using System.Web;
using System.Web.Optimization;

namespace UserVlidtion
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/JS").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/UserAuthorization.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));


            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/Site.css"));
        }
    }
}
