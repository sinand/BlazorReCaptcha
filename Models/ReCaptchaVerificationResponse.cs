using System.Text.Json.Serialization;

public class ReCaptchaVerificationResponse
{
    public bool Success { get; set; }

    [JsonPropertyName("challenge_ts")]
    public DateTimeOffset ChallengeTimestamp { get; set; }

    public string Hostname { get; set; }

    [JsonPropertyName("error-codes")]
    public string[] ErrorCodes { get; set; } = new string[0];
}


public class ReCaptchaResponseData
{
    public int id { get; set; }
    public int account_id { get; set; }
    public int sms_title_id { get; set; }
    public string content { get; set; }
    public string is_future_sms { get; set; }
    public string attachment_file_name { get; set; }
    public string attachment_content_type { get; set; }
    public string attachment_file_size { get; set; }
    public string attachment_updated_at { get; set; }
    public string send_date { get; set; }
    public string deleted_at { get; set; }
    public string created_at { get; set; }
    public string updated_at { get; set; }
    public string reject_link { get; set; }
}

public class ReCaptchaResponse
{
    public bool success { get; set; }
    public string challenge_ts { get; set; }
    public string hostname { get; set; }
    [JsonPropertyName("error-codes")]
    public string[]? ErrorCodes { get; set; } = [];
}