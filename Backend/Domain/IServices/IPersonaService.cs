using Back_End.Domain.Models;

namespace Back_End.Domain.IServices
{
    public interface IPersonaService
    {
        Task ActualziarPersona(Persona persona);
        Task<int> ComprobarUsaurioExistente(int documento);
        Task<Persona> ObtenerPersona(int documento);
        Task<IEnumerable<Persona>> ObtenerPersonas();
        Task RegistrarPersona(Persona persona);
    }
}
