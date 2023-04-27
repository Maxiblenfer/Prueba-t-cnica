using Backend.Domain.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MaestraController : ControllerBase
    {
        private readonly IMaestraService maestraService;

        public MaestraController(IMaestraService maestraService)
        {
            this.maestraService = maestraService;
        }
        [HttpGet]
        [Route("TipoDePersona")]
        public async Task<IEnumerable<string>> ObtenerTiposDePerosna()
        {
            return await maestraService.ObtenerTiposDePerosna();
        }
        [Route("TipoDeSangre")]
        public async Task<IEnumerable<string>> ObtenerTiposDeSangre()
        {
            return await maestraService.ObtenerTiposDeSangre();
        }
        [Route("Generos")]
        public async Task<IEnumerable<string>> ObtenerGeneros()
        {
            return await maestraService.ObtenerGeneros();
        }
    }
}
