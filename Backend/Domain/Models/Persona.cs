namespace Back_End.Domain.Models
{
    public class Persona
    {
        public int ID { get; set; }
        public int DOCUMENTO { get; set; }
        public string NOMBRES { get; set; }
        public string APELLIDOS { get; set; }
        public DateTime FECHANACIMIENTO { get; set; }
        public string TIPO { get; set; }
        public string GENERO { get; set; }
        public DateTime FECHAREGISTRO { get; set; }
        public DateTime FECHABAJA { get; set; }
        public string USUARIO { get; set; }
        public string DIRECCION { get; set; }
        public string DESCRIPCION { get; set; }
        public string TELEFONOFIJO { get; set; }
        public string TELEFONOMOVIL { get; set; }
        public string EMAIL { get; set; }
    }
}
