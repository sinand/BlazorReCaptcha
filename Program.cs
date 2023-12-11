using BlazorReCaptcha;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents().AddInteractiveServerComponents();

var app = builder.Build();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<ReCaptcha>().AddInteractiveServerRenderMode();

app.Run();