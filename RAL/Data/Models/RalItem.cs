using Newtonsoft.Json;

namespace RAL.Data.Models
{
    public class RalItem
    {
        public string? Code { get; set; }
        public Color? Color { get; set; }
        public Names? Names { get; set; }
    }

    public class Color
    {
        public Rgb? Rgb { get; set; }
    }

    public class Rgb { 
    
        public int R { get; set; }
        public int G { get; set; }
        public int B { get; set; }
    }

    public class Names
    {
        public string? En { get; set; }
    }
}
