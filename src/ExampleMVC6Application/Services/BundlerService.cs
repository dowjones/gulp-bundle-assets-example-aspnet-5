using System.IO;
using System.Threading.Tasks;
using Microsoft.Framework.Runtime;
using Newtonsoft.Json.Linq;

namespace ExampleMVC6Application.Services
{
    public class BundlerService
    {
        private readonly IApplicationEnvironment _appEnvironment;

        public BundlerService(IApplicationEnvironment appEnvironment)
        {
            _appEnvironment = appEnvironment;
        }

        public async Task<dynamic> GetBundleResult()
        {
            string fileName = Path.Combine(_appEnvironment.ApplicationBasePath, "bundle.result.json");
            string jsonText = File.ReadAllText(fileName);
            return await Task.FromResult(JObject.Parse(jsonText));
        }
    }
}
