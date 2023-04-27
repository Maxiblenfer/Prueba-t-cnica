using Backend.Domain.Models;

namespace Backend.Domain.IServices
{
    public interface IpacienteService
    {
        Task RegistrarPaciente(Paciente paciente);
    }
}
