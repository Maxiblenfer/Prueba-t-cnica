using Back_End.Domain.IServices;
using Back_End.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Back_End.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonaController : ControllerBase
    {
        private readonly IPersonaService personaService;

        public PersonaController(IPersonaService personaService)
        {
            this.personaService = personaService;
        }

        [Route("Registrar")]
        [HttpPost]
        public async Task<IActionResult> RegistrarPersona(Persona persona)
        {
            try
            {
                if(await personaService.ComprobarUsaurioExistente(persona.DOCUMENTO) == 0)
                {
                    await personaService.RegistrarPersona(persona);
                    return Ok(new { message = "Registro con éxito" });
                }
                else
                {
                    return BadRequest(new { message = "repetido" } );
                }
              
            }
            catch (Exception)
            {

                return BadRequest(new { message="Error" });
            }
        }
        [HttpGet]
        [Route("Obtener")]
        public async Task<IEnumerable<Persona>> ObtenerPerosnas()
        {
           return await personaService.ObtenerPersonas();
        }
        [HttpGet]
        [Route("ObtenerPersona")]
        public async Task<Persona> ObtenerPersona(int documento) { 
            var persona= await personaService.ObtenerPersona(documento);
            return await personaService.ObtenerPersona(documento);
        }

        [HttpPut]
        [Route("ActualizarPersona")]
        public async Task <IActionResult> ActualizarPersona(Persona persona)
        {
            try
            {
             await personaService.ActualziarPersona(persona);
                return Ok(new {message="Actualización exitosa"});
            }
            catch (Exception)
            {

               return BadRequest(new { message="Error"});
            }
        }
    }
}
