using RAL.Data.DTOs;
using RAL.Services.Interfaces;
using Newtonsoft.Json;
using System.Reflection;
using Newtonsoft.Json.Linq;
using RAL.Data.Models;

namespace RAL.Services
{
    public class RalService : IRalService
    {
        public Task<List<RalDTO>> GetRalList()
        {
            var json = string.Empty;
            using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("RAL.Data.ral.json"))
            {
                json = new StreamReader(stream).ReadToEnd();
            }
            var obj = JObject.Parse(json);

            List<RalDTO> ralDTOs = new List<RalDTO>();

            foreach(var prop in obj.Properties())
            {
                var item = prop.Value.ToObject<RalItem>();
                var dto = new RalDTO() { Name = item.Names.En, Code = item.Code, RGB = $"rgb({item.Color.Rgb.R},{item.Color.Rgb.G}, {item.Color.Rgb.B})" };
                ralDTOs.Add(dto);
            }
            return Task.FromResult(ralDTOs);
        }

        public async Task<RalDTO> GetRalItem(string code)
        {
            return (await GetRalList()).Where(x => x.Code == code).Single();
        }
    }
}
