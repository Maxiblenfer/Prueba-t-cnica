namespace Backend.Domain.IServices
{
    public interface IMaestraService
    {
        Task<IEnumerable<string>> ObtenerGeneros();
        Task<IEnumerable<string>> ObtenerTiposDePerosna();
        Task<IEnumerable<string>> ObtenerTiposDeSangre();
    }
}
