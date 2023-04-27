namespace Backend.Domain.Models
{
    public class Paciente
    {
        public string TIPODESANGRE { get; set; }
        public string SALARIO { get; set; }
        public DateTime FECHAREGISTRO { get; set; }
        public string USUARIO { get; set; }
        public string CONDICION { get; set; }
        public int FKID { get; set; }
    }
}
