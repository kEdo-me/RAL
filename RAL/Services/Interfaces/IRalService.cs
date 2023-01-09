using RAL.Data.DTOs;

namespace RAL.Services.Interfaces
{
    public interface IRalService
    {
        Task<List<RalDTO>> GetRalList();
        Task<RalDTO> GetRalItem(string code);
    }
}
