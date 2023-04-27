using Backend.Domain.IServices;
using Backend.Domain.Models;
using Dapper;
using Microsoft.Data.SqlClient;

namespace Backend.Services
{
    public class PacienteService:IpacienteService
    {
        private readonly IConfiguration configuration;
        private readonly string connectionString;
        public PacienteService(IConfiguration configuration)
        {
            this.configuration = configuration;
            connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public async Task RegistrarPaciente(Paciente paciente)
        {
            using var conexion = new SqlConnection(connectionString);
            var fecharegisto = DateTime.Now.ToString("dd-MM-yyyy");
            await conexion.QueryAsync<Paciente>($"INSERT INTO PACIENTES VALUES ('{paciente.TIPODESANGRE}','{paciente.SALARIO}','{fecharegisto}','{paciente.USUARIO}','{paciente.CONDICION}',{paciente.FKID})");
        }

    }
}
