﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore.Blazor.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace SimpleMarkdownEdit{
	public class Program{
		public static async Task Main(string[] args){
			var builder = WebAssemblyHostBuilder.CreateDefault(args);
			builder.RootComponents.Add<App>("app");
			builder.Services.AddScoped<AppStore>();

			await builder.Build().RunAsync();
		}
	}
}
