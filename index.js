import 'billboard.js/dist/theme/datalab.min.css';
import './chart.css';
import 'billboard.js/dist/billboard.pkgd.min.js';
import bb from 'billboard.js';

// Write Javascript code!
var chart = bb.generate({
  "title": {
    "text": "BÁO CÁO THỐNG KÊ KHỐI NGOẠI GIAO DỊCH (HPG)"
  },
  "data": {
    "x": "x",
    "columns": [
      [
        "x",
        "7/4",
        "7/5",
        "7/6",
        "7/7",
        "7/10",
        "7/11",
        "7/12",
        "7/13",
        "7/14",
        "7/17",
        "7/18",
        "7/19",
        "7/20",
        "7/21",
        "7/24",
        "7/25",
        "7/26",
        "7/27",
        "7/28",
        "7/31"
      ],
      [
        "dataBuy",
        "5.24",
        "4.80",
        "5.72",
        "4.57",
        "9.71",
        "3.15",
        "1.13",
        "0.31",
        "2.31",
        "1.21",
        "3.35",
        "2.75",
        "5.57",
        "3.60",
        "1.29",
        "5.18",
        "6.64",
        "4.11",
        "1.83",
        "2.83"
      ],
      [
        "dataSell",
        "-3.47",
        "-0.29",
        "-3.69",
        "-1.84",
        "-2.27",
        "-2.56",
        "-2.45",
        "-0.57",
        "-0.44",
        "-1.12",
        "-2.02",
        "-0.24",
        "-3.09",
        "-2.30",
        "-1.13",
        "-2.64",
        "-1.01",
        "-2.48",
        "-2.48",
        "-9.37"
      ],
      [
        "dataPrice",
        "26.3",
        "26.9",
        "27.0",
        "27.4",
        "27.7",
        "27.3",
        "27.0",
        "27.1",
        "27.5",
        "27.3",
        "27.2",
        "27.4",
        "28.2",
        "28.4",
        "28.3",
        "28.3",
        "28.4",
        "28.4",
        "28.3",
        "28.2"
      ]
    ],
    "type": "bar",
    "colors": {
      "dataBuy": "#00A37D",
      "dataSell": "#FA0011",
      "dataPrice": "#0000ff"
    },
    "labels": {
      "show": true,
      "position": {
        "dataBuy": {
          "x": 0,
          "y": -5
        },
        "dataSell": {
          "x": 0,
          "y": 5
        }
      }
    },
    "types": {
      "dataBuy": "bar",
      "dataSell": "bar",
      "dataPrice": "line"
    },
    "groups": [
      [
        "dataBuy",
        "dataSell"
      ]
    ],
    "axes": {
      "dataBuy": "y",
      "dataPrice": "y2"
    },
    "names": {
      "dataBuy": "NN Mua (2.83 M)",
      "dataSell": "NN Bán (-9.37 M)",
      "dataPrice": "Giá (28.2 K)"
    }
  },
  "bubble": {
    "maxR": 10
  },
  "bar": {
    "width": {
      "ratio": 0.9,
      "max": 40
    },
    "padding": 3
  },
  "axis": {
    "x": {
      "type": "category",
      "tick": {
        "rotate": 90,
        "autorotate": true,
        "multiline": false
      },
      "show": true
    },
    "y": {
      "label": {
        "text": "Lượng (triệu)",
        "position": "outer-middle"
      }
    },
    "y2": {
      "label": {
        "text": "Giá (nghìn)",
        "position": "outer-middle"
      },
      "show": true
    }
  },
  "legend": {
    "show": true
  },
  "grid": {
    "y": {
      "lines": [
        {
          "value": 0,
          "class": "grid0"
        }
      ]
    }
  },
  "point": {
    "show": true
  },
  "transition": {
    "duration": 0
  },
  bindto: "#barChart_1"
});
