using Back_End.Domain.IServices;
using Back_End.Domain.Models;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data.SqlClient;

namespace Back_End.Services
{
    public class PersonaService : IPersonaService
    {
        private readonly IConfiguration configuration;
        private readonly string connectionstring;
        public PersonaService(IConfiguration configuration)
        {
            this.configuration = configuration;
            connectionstring = configuration.GetConnectionString("DefaultConnection");
        }

        public async Task RegistrarPersona(Persona persona)
        {
            using var conexion = new SqlConnection(connectionstring);
            var fechanacimiento = persona.FECHANACIMIENTO.ToString("dd-MM-yyyy");
            var fechabaja = persona.FECHABAJA.ToString("dd-MM-yyyy");
            var fecharegisto = DateTime.Now.ToString("dd-MM-yyyy");
            var LINEA = $"INSERT INTO PERSONAS VALUES('{persona.DOCUMENTO}','{persona.NOMBRES}','{persona.APELLIDOS}','{fechanacimiento}','{persona.TIPO}','{persona.GENERO}','{fecharegisto}','{fechabaja}','{persona.USUARIO}','{persona.DIRECCION}','{persona.DESCRIPCION}','{persona.TELEFONOFIJO}','{persona.TELEFONOMOVIL}','{persona.EMAIL}')";
            await conexion.QueryAsync($"INSERT INTO PERSONAS VALUES('{persona.DOCUMENTO}','{persona.NOMBRES}','{persona.APELLIDOS}','{fechanacimiento}','{persona.TIPO}','{persona.GENERO}','{fecharegisto}','{fechabaja}','{persona.USUARIO}','{persona.DIRECCION}','{persona.DESCRIPCION}','{persona.TELEFONOFIJO}','{persona.TELEFONOMOVIL}','{persona.EMAIL}')");
        }
        public async Task<IEnumerable<Persona>> ObtenerPersonas()
        {
            using var conexion = new SqlConnection(connectionstring);
            return await conexion.QueryAsync<Persona>("select * from PERSONAS WHERE TIPO='PACIENTE'");
        }

        public async Task<int> ComprobarUsaurioExistente(int documento)
        {
            using var conexion = new SqlConnection(connectionstring);
            return await conexion.QueryFirstOrDefaultAsync<int>($"select 1 from PERSONAS WHERE DOCUMENTO={documento}");
        }
        public async Task<Persona> ObtenerPersona(int documento)
        {
            using var conexion = new SqlConnection(connectionstring);
            return await conexion.QueryFirstOrDefaultAsync<Persona>($"select * from PERSONAS WHERE TIPO='PACIENTE' AND DOCUMENTO={documento}");
        }
        public async Task ActualziarPersona(Persona persona)
        {
            using var conexion = new SqlConnection(connectionstring);
            var fechanacimiento = persona.FECHANACIMIENTO.ToString("dd-MM-yyyy");
            var fechabaja = persona.FECHABAJA.ToString("dd-MM-yyyy");
            await conexion.QueryAsync($"UPDATE PERSONAS SET NOMBRES= '{persona.NOMBRES}', APELLIDOS='{persona.APELLIDOS}',FECHANACIMIENTO= '{fechanacimiento}',TIPO= '{persona.TIPO}',GENERO= '{persona.GENERO}',FECHABAJA= '{fechabaja}',USUARIO= '{persona.USUARIO}',DIRECCION= '{persona.DIRECCION}',DESCRIPCION= '{persona.DESCRIPCION}',TELEFONOFIJO= '{persona.TELEFONOFIJO}',TELEFONOMOVIL= '{persona.TELEFONOMOVIL}',EMAIL= '{persona.EMAIL}' WHERE DOCUMENTO='{persona.DOCUMENTO}'");
        }
    }
}
