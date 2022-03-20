export const HeaderSnippet =
    `/// <summary>
/// Welcome to my personal Portofolio
/// </summary>
namespace VaggelisDiatsigkos.Features.Projects
{
  public record GetProjectsQuery() 
    : IRequest;
  
  public class GetProjectsQueryHandler 
    : IRequestHandler<GetProjectsQuery, ProjectDto[]>
  {
      private readonly SelfContext _context;

      public GetProjectsQueryHandler(
          SelfContext context
      )
      {
          _context = context 
            ?? throw new ArgumentNullException(nameof(context));
      }

      public async Task<ProjectDto[]> Handle(
          GetProjectsQuery request, 
          CancellationToken cancellationToken
      ) => (await _context
              .Projects
              .AsNoTracking()
              .ToListAsync(cancellationToken)
           ).Select(x => x.ToDto()).ToArray();
  }
}`;