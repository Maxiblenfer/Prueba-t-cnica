using Back_End.Domain.IServices;
using Backend.Domain.IServices;
using Backend.Domain.Models;

using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PacienteController : ControllerBase
    {
        private readonly IpacienteService ipacienteService;
        private readonly IPersonaService personaService;

        public PacienteController(IpacienteService ipacienteService,IPersonaService personaService)
        {
            this.ipacienteService = ipacienteService;
            this.personaService = personaService;
        }


        [HttpPost]
        [Route("Registrar")]
        public async Task<IActionResult> RegistrarPaciente(Paciente paciente)
        {
            try
            {
                var persona = await personaService.ObtenerPersona(paciente.FKID);
                if (persona != null)
                {
                    paciente.FKID = persona.ID;
                    await ipacienteService.RegistrarPaciente(paciente);
                    return Ok(new {message="Registro exitoso" });
                }
                else
                {
                    return BadRequest(new { message = "error" });
                }
            }
            catch (Exception)
            {

                return BadRequest(new {message="error" });
            }
        }

    }
}
