using Microsoft.AspNetCore.Mvc;
using RAL.Data.DTOs;
using RAL.Services.Interfaces;

namespace RAL.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RalController : ControllerBase
    {
        private readonly ILogger<RalController> _logger;
        private readonly IRalService _ralService;

        public RalController(ILogger<RalController> logger, IRalService ralService)
        {
            _logger = logger;
            _ralService = ralService;
        }

        [HttpGet]
        public async Task<IActionResult> GetRalList()
        {
            return Ok(await _ralService.GetRalList());
        }

        [HttpGet("GetRalItem/{code}")]
        public async Task<IActionResult> GetRalItem(string code)
        {
            return Ok(await _ralService.GetRalItem(code));
        }
    }
}