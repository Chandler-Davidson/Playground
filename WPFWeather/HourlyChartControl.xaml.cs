﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

using GetWeather;

using LiveCharts;
using LiveCharts.Wpf;

namespace WPFWeather
{
    /// <summary>
    /// Interaction logic for HourlyChartConrol.xaml
    /// </summary>
    public partial class HourlyChartControl : UserControl
    {
        public SeriesCollection SeriesCollection { get; set; }
        public string[] Labels { get; set; }

        public object Days { get; set; }
        public List<Hour> SelectedDay { get; set; }

        public HourlyChartControl()
        {
            InitializeComponent();

            SeriesCollection = new SeriesCollection
            {
                //new LineSeries
                //{
                //    Title = "Tempearture",
                //    Values = new ChartValues<int> { 91, 87, 83, 76, 74, 72, 74, 84 }
                //},
                //new LineSeries
                //{
                //    Title = "Humidity",
                //    Values = new ChartValues<double> { 91, 87, 83, 76, 74, 72, 74, 84 }
                //},
                //new LineSeries
                //{
                //    Title = "Percipitation",
                //    Values = new ChartValues<double> { 91, 87, 83, 76, 74, 72, 74, 84 }
                //},

            };

            DataContext = this;
        }

        public void SetDays(List<Hour> hours)
        {
            var d = hours.GroupBy(
                x => x.DtTxt.Day,
                (key, w) => new { Dt = key, Hours = w.ToList() }).ToList();

            SelectedDay = d[0].Hours;

            SeriesCollection.Clear();

            SeriesCollection.Add(
            new LineSeries
            {
                Title = "Temperature",
                Values = new ChartValues<int>(SelectedDay.Select(x => Convert.ToInt32(x.Main.Temp)))
            });

            Labels = SelectedDay.Select(x => x.DtTxt.ToString("hh tt")).ToArray<string>();
        }
    }
}
