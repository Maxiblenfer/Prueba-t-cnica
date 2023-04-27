using Backend.Domain.IServices;
using Dapper;
using Microsoft.Data.SqlClient;

namespace Backend.Services
{
    public class MaestraService:IMaestraService
    {
        private readonly IConfiguration configuration;
        private readonly string connectionString;
        public MaestraService(IConfiguration configuration)
        {
            this.configuration = configuration;
            connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public async Task<IEnumerable<String>> ObtenerTiposDePerosna()
        {
            using var conexion = new SqlConnection(connectionString);
            return await conexion.QueryAsync<string>("SELECT NOMBRE FROM DATAMAESTRA INNER JOIN MAESTRAS ON DATAMAESTRA.ID_FK=MAESTRAS.ID WHERE MAESTRAS.TIPOMAESTRA='TIPOPERSONA'");
        }

        public async Task<IEnumerable<String>> ObtenerTiposDeSangre()
        {
            using var conexion = new SqlConnection(connectionString);
            return await conexion.QueryAsync<string>("SELECT NOMBRE FROM DATAMAESTRA INNER JOIN MAESTRAS ON DATAMAESTRA.ID_FK=MAESTRAS.ID WHERE MAESTRAS.TIPOMAESTRA='TIPODESANGRE'");
        }

        public async Task<IEnumerable<String>> ObtenerGeneros()
        {
            using var conexion = new SqlConnection(connectionString);
            return await conexion.QueryAsync<string>("SELECT NOMBRE FROM DATAMAESTRA INNER JOIN MAESTRAS ON DATAMAESTRA.ID_FK=MAESTRAS.ID WHERE MAESTRAS.TIPOMAESTRA='GENERO'");
        }
    }
}
