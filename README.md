# BlazorReCaptcha Component

BlazorReCaptcha is a Blazor component that simplifies the integration of Google's reCAPTCHA v2 into your Blazor applications. This component allows you to easily add reCAPTCHA capabilities to your forms and handle client-side and server-side validation.

## Prerequisites

Before using this component, ensure that you have the following:

- **Google reCAPTCHA API Keys:** You need a Site Key and a Secret Key from the [reCAPTCHA website](https://www.google.com/recaptcha) for the component to work correctly.

## Installation

To use BlazorReCaptcha in your Blazor application, you can install the NuGet package:

```bash
dotnet add package BlazorReCaptcha
```

## Usage

1. **Add the script reference to your `app.razor`**

```html
<script src="_content/BlazorReCaptcha/BlazorReCaptcha.js"></script>
```

2. **Add the component to your Razor page or component**

```html
<ReCaptcha @ref="reCaptcha" SiteKey="your_site_key" Secret="your_secret_key" OnClientSuccess="OnClientSuccess" OnExpired="OnExpired" />

or

<ReCaptcha @ref="reCaptcha" OnClientSuccess="OnClientSuccess" OnExpired="OnExpired" />
```

3. **Handle success and expiration events**

``` csharp
@code {
    async Task HandleClientSuccess(string response)
    {
        // Handle client-side success
    }

    async Task HandleExpired()
    {
        // Handle expiration
    }
}
```

4. **Accessing reCAPTCHA response in code**

``` csharp
var response = await captcha.GetResponseAsync();
```

5. **Verify the reCAPTCHA response on the server**

``` csharp
var verificationResult = await captcha.Verify(response);
```

## Parameters

- `SiteKey`: Your reCAPTCHA Site Key.
- `Secret`: Your reCAPTCHA Secret Key.
- `OnClientSuccess`: Event callback
``` csharp
async Task HandleClientSuccess(string response)
{
    // Handle client-side success
}
```
- `OnExpired`: Event callback
``` csharp
async Task HandleExpired()
{
    // Handle expiration
}
```

## Examples

For a complete example of how to use this component, check the [BlazorReCaptchaSample](https://github.com/sinand/BlazorReCaptchaSample) in this repository.

## Configuration

You can configure the reCAPTCHA keys in your `appsettings.json` file:

```json
{
  "ReCaptcha": {
    "Sitekey": "your_site_key",
    "Secret": "your_secret_key"
  }
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This component is inspired by the [Google reCAPTCHA documentation](https://developers.google.com/recaptcha/intro).
- Special thanks to the Blazor community for their contributions and feedback.

Feel free to contribute, open issues, or provide feedback to make this component even better!
