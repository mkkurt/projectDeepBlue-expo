export default [
  {
    name: "P1 Compressor not running.",
    reasons: [
      {
        name: "P1R1 Control current circuit open due to active pressure switch, thermostat, motor protection device, or defrost timer.",
        solutions: ["P1S1 Correctly identify the reason for the open circuit."],
      },
      {
        name: "P1R2 High pressure switch cuts the circuit.",
        solutions: [
          "P1S2 Find and eliminate the cause of high condenser pressure, reset the high pressure switch.",
        ],
      },
      {
        name: "P1R3 Low pressure switch cuts the circuit.",
        solutions: [
          "P1S3 Compressor cannot restart until gas pressure on the low pressure side reaches the set value.",
        ],
      },
      {
        name: "P1R4 Oil pressure switch cuts the circuit.",
        solutions: [
          "P1S4.1 If there is foaming in the oil, check the oil level in the crankcase.",
          "P1S4.2 Reset the device.",
        ],
      },
      {
        name: "P1R5 Switch off.",
        solutions: ["P1S5 Turn on the switch."],
      },
      {
        name: "P1R6 Dirt or sticking at the set points of the low or high pressure switches.",
        solutions: ["P1S6 Check and clean."],
      },
      {
        name: "P1R7 No suction on the low pressure side.",
        solutions: [
          "P1S7 There is no refrigerant in the system, find and repair the leak and charge the system with gas again.",
        ],
      },
      {
        name: "P1R8 Low voltage, overload relay in circuit.",
        solutions: ["P1S8 Find and eliminate the cause of low voltage."],
      },
      {
        name: "P1R9 Protection in circuit due to wrong connection in the motor.",
        solutions: ["P1S9 Swap the connection of two phases."],
      },
      {
        name: "P1R10 Cooling water pump and/or fans are not in circuit.",
        solutions: ["P1S10 Start the pump and/or activate the fans."],
      },
    ],
  },
  {
    name: "P2 Compressor cycles on and off too frequently (runs for a very short time).",
    reasons: [
      {
        name: "P2R1 Low pressure switch cuts the circuit at the wrong pressure.",
        solutions: [
          "P2S1 Set the low pressure switch to the correct pressure.",
        ],
      },
      {
        name: "P2R2 Low pressure switch cuts the circuit.",
        solutions: [
          "P2S2.1 Open the partially closed valve on the suction side.",
          "P2S2.2 If there is insufficient gas, charge the system with gas.",
        ],
      },
      {
        name: "P2R3 The pressure difference between cut-out (stop) and cut-in (start) on the low pressure switch is too low.",
        solutions: ["P2S3 Increase the pressure difference."],
      },
      {
        name: "P2R4 Suction line filter clogged.",
        solutions: ["P2S4 Check and clean the suction filter."],
      },
      {
        name: "P2R5 Expansion valve slightly open (compressor shuts down due to low pressure).",
        solutions: [
          "P2S5 Open the valve if necessary (adjust overheating appropriately).",
        ],
      },
      {
        name: "P2R6 Clogged (frozen) coils.",
        solutions: ["P2S6 Defrost."],
      },
      {
        name: "P2R7 The thermal sensor of the expansion valve does not sense (compressor shuts down due to low pressure).",
        solutions: [
          "P2S7 Hold the thermal sensor with your hand and observe the flow of refrigerant. If there is flow, the thermal sensor is working. If there is no flow, the expansion valve is defective, replace the valve.",
        ],
      },
      {
        name: "P2R8 There is an insufficient amount of refrigerant in the system (compressor shuts down due to low pressure).",
        solutions: ["P2S8 Find and fix the leak and recharge."],
      },
      {
        name: "P2R9 Solenoid valve in liquid line does not close tightly.",
        solutions: [
          "P2S9.1 Check the flow direction.",
          "P2S9.2 Replace the defective valve.",
        ],
      },
      {
        name: "P2R10 There is icing (frosting, freezing) in the expansion valve.",
        solutions: [
          "P2S10.1 Melt the ice in the expansion valve with a hot, damp cloth.",
          "P2S10.2 Check the dryer filter, replace if necessary.",
        ],
      },
      {
        name: "P2R11 Blockage in the dryer filter.",
        solutions: ["P2S11 Check the dryer filter, replace if necessary."],
      },
    ],
  },
  {
    name: "P3 Compressor starts but shuts down immediately (stays in that position after stopping).",
    reasons: [
      {
        name: "P3R1 Motor protection cuts the circuit.",
        solutions: ["P3S1 Find and eliminate the cause of the overload."],
      },
      {
        name: "P3R2 Oil pressure switch defective.",
        solutions: ["P3S2 Replace the pressure switch."],
      },
      {
        name: "P3R3 Insufficient amount of oil.",
        solutions: ["P3S3 Top up the oil."],
      },
      {
        name: "P3R4 Oil pressure error due to foaming in the oil.",
        solutions: ["P3S4 Reduce capacity."],
      },
      {
        name: "P3R5 Compressor capacity too high.",
        solutions: ["P3S5 Check operating conditions and reduce capacity."],
      },
      {
        name: "P3R6 High pressure switch cuts the circuit.",
        solutions: [
          "P3S6.1 Condenser pressure is high, if there is too much refrigerant, discharge some gas.",
          "P3S6.2 Check the cooling in the condenser.",
          "P3S6.3 Replace the defective high pressure switch.",
          "P3S6.4 Set the high pressure switch to the correct pressure.",
        ],
      },
      {
        name: "P3R7 There is too much refrigerant in the system (compressor shuts down due to high pressure).",
        solutions: ["P3S7 Discharge some gas."],
      },
    ],
  },
  {
    name: "P4 Compressor runs continuously.",
    reasons: [
      {
        name: "P4R1 Thermostat or low pressure switch does not cut the circuit at very low temperatures.",
        solutions: [
          "P4S1 Adjust the operating values, check that the thermostat and pressure switch are working normally.",
        ],
      },
      {
        name: "P4R2 Compressor runs at low low pressure due to low gas to the coils.",
        solutions: [
          "P4S2 Clean the filters and observe the operation of the expansion valve.",
        ],
      },
      {
        name: "P4R3 Insufficient refrigerant.",
        solutions: ["P4S3 Charge the system with gas."],
      },
      {
        name: "P4R4 Discharge valve leaking.",
        solutions: [
          "P4S4 Remove the cylinder cover and repair or replace the valve.",
        ],
      },
      {
        name: "P4R5 High temperature in the rooms (due to open door or work).",
        solutions: [
          "P4S5 It is normal for the compressor to be continuously in circuit for cooling.",
        ],
      },
    ],
  },
  {
    name: "P5 Abnormal sound or noise from the compressor.",
    reasons: [
      {
        name: "P5R1 Compressor capacity too high during initial start-up.",
        solutions: ["P5S1.1 Reduce capacity.", "P5S1.2 Check the unloader."],
      },
      {
        name: "P5R2 Oil pressure too low.",
        solutions: ["P5S2 Check oil level and foaming."],
      },
      {
        name: "P5R3 Refrigerant in liquid state in the low pressure circuit.",
        solutions: [
          "P5S3.1 Adjust the expansion valve (increase overheating by slightly closing the valve).",
          "P5S3.2 Check the heat exchanger.",
          "P5S3.3 Check for icing in the evaporator.",
        ],
      },
      {
        name: "P5R4 Motor and compressor not on axis.",
        solutions: ["P5S4 Align to axis."],
      },
      {
        name: "P5R5 Coupling bolts loose.",
        solutions: ["P5S5 Tighten the bolts with a torque wrench."],
      },
      {
        name: "P5R6 Worn or damaged bearings.",
        solutions: ["P5S6 Maintain or replace."],
      },
      {
        name: "P5R7 Oil level in the crankcase is too low because there is too much oil circulating in the system.",
        solutions: [
          "P5S7 Check oil level. Solenoid valve, filter or oil return circuit may be clogged. Leaking suction valve plates, piston rings and worn cylinder can cause such oil consumption.",
        ],
      },
      {
        name: "P5R8 Capacity setting fluctuates due to oil pressure error.",
        solutions: [
          "P5S8 Find the cause of low oil pressure (low oil level, foaming in oil, pump, etc.) and increase the pressure.",
        ],
      },
      {
        name: "P5R9 Loose bed bolts (vibration).",
        solutions: ["P5S9 Tighten the bolts."],
      },
    ],
  },
  {
    name: "P6 Compressor capacity too low.",
    reasons: [
      {
        name: "P6R1 Insufficient oil.",
        solutions: ["P6S1 Top up the oil."],
      },
      {
        name: "P6R2 Iced coils (evaporator pipes).",
        solutions: ["P6S2 Defrost, adjust defrost time if necessary."],
      },
      {
        name: "P6R3 Faulty oil pump and incorrect oil pressure.",
        solutions: ["P6S3 Repair or replace the oil pump."],
      },
      {
        name: "P6R4 Capacity adjustment system (unloader) defective.",
        solutions: [
          "P6S4 Usually oil pressure or refrigerant in the oil causes this.",
        ],
      },
    ],
  },
  {
    name: "P7 Liquid hammer (knocking) in compressor during initial start-up.",
    reasons: [
      {
        name: "P7R1 Sudden drop in pressure with absorption of gas in oil while foaming in oil.",
        solutions: [
          "P7S1 Reduce compressor capacity or run compressor with throttled suction valve.",
        ],
      },
      {
        name: "P7R2 Refrigerant condenses in the suction circuit or crankcase.",
        solutions: [
          "P7S2 The crankcase heater should be activated 6-8 hours before the compressor is started, so that the refrigerant dissolved in the oil can boil and separate before the compressor starts.",
        ],
      },
    ],
  },
  {
    name: "P8 Liquid knocking in compressor during operation.",
    reasons: [
      {
        name: "P8R1 Liquid phase refrigerant in the suction line.",
        solutions: ["P8S1 Expansion valve unstable."],
      },
      {
        name: "P8R2 Superheat is set too low in the expansion valve.",
        solutions: [
          "P8S2 Superheat should normally be set to 4-6\u00b0C (maximum 3-8\u00b0C).",
        ],
      },
    ],
  },
  {
    name: "P9 Excessively high condenser pressure.",
    reasons: [
      {
        name: "P9R1 Excessive amount of refrigerant.",
        solutions: [
          "P9S1 Refrigerant reduces the cooling area as it fills the condenser, so discharge some gas.",
        ],
      },
      {
        name: "P9R2 Insufficient cooling water.",
        solutions: ["P9S2 Increase the amount of cooling water."],
      },
      {
        name: "P9R3 Cooling water hot.",
        solutions: ["P9S3 Increase the amount of cooling water."],
      },
      {
        name: "P9R4 Condenser pipes clogged or dirty.",
        solutions: ["P9S4 Clean."],
      },
      {
        name: "P9R5 Presence of non-condensable gases (such as air other than refrigerant) in the condenser.",
        solutions: ["P9S5 Vent the air in the condenser."],
      },
    ],
  },
  {
    name: "P10 Condenser pressure too low.",
    reasons: [
      {
        name: "P10R1 Excessive cooling in the condenser (too much cooling water).",
        solutions: [
          "P10S1 Reduce cooling in the condenser (amount of cooling water).",
        ],
      },
      {
        name: "P10R2 Cooling water too cold.",
        solutions: ["P10S2 Reduce the amount of water entering the condenser."],
      },
      {
        name: "P10R3 Damaged piston rings and worn cylinders.",
        solutions: ["P10S3 Replace damaged or worn parts."],
      },
      {
        name: "P10R4 Discharge valves damaged or leaking.",
        solutions: ["P10S4 Check valve plates and piston rings."],
      },
      {
        name: "P10R5 Compressor capacity reduced.",
        solutions: [
          "P10S5 Check if the compressor capacity meets the system load, reduce cooling in the condenser.",
        ],
      },
      {
        name: "P10R6 By-pass between low and high pressure sides of the compressor.",
        solutions: ["P10S6 Detect compressor internal leaks."],
      },
      {
        name: "P10R7 Temperature sensor loose.",
        solutions: ["P10S7 Check and secure."],
      },
      {
        name: "P10R8 The amount of refrigerant in the system has decreased.",
        solutions: [
          "P10S8.1 Detect leaks.",
          "P10S8.2 Charge the system with gas.",
        ],
      },
    ],
  },
  {
    name: "P11 Excessively high suction pressure.",
    reasons: [
      {
        name: "P11R1 Incorrect adjustment of the expansion valve, refrigerant is in liquid state in the suction circuit.",
        solutions: ["P11S1 Adjust, repair or replace the expansion valve."],
      },
      {
        name: "P11R2 Suction valves leaking.",
        solutions: ["P11S2 Check valve plates and renew if necessary."],
      },
      {
        name: "P11R3 By-pass on the suction side of the compressor, safety valve leaking or opening early.",
        solutions: [
          "P11S3 Check for by-pass in the system, adjust or repair the leaking valve.",
        ],
      },
      {
        name: "P11R4 Compressor capacity reduced.",
        solutions: [
          "P11S4.1 Adjust compressor capacity by checking if all cylinders are working.",
          "P11S4.2 Check the function of the capacity controller (unloader).",
        ],
      },
      {
        name: "P11R5 Too much refrigerant passing through the expansion valve (superheat too low because the valve is too open).",
        solutions: [
          "P11S5 Adjust the expansion valve (superheat 4-6\u00b0C) (close a little) and check the thermal sensor.",
        ],
      },
    ],
  },
  {
    name: "P12 Suction pressure too low.",
    reasons: [
      {
        name: "P12R1 Oil in the coils.",
        solutions: [
          "P12S1 Drain the oil and send it to the compressor crankcase.",
        ],
      },
      {
        name: "P12R2 Insufficient amount of refrigerant.",
        solutions: [
          "P12S2.1 Check the amount of gas.",
          "P12S2.2 Find and repair the leak.",
          "P12S2.3 Charge the system with gas.",
        ],
      },
      {
        name: "P12R3 There is icing (frosting, freezing) in the expansion valve.",
        solutions: [
          "P12S3.1 Melt the ice in the expansion valve with a hot, damp cloth.",
          "P12S3.2 Check the dryer filter, replace if necessary.",
        ],
      },
      {
        name: "P12R4 The thermal sensing expansion valve has lost its charge (gas).",
        solutions: ["P12S4 Replace the valve as it cannot open."],
      },
      {
        name: "P12R5 Expansion valve is throttled excessively, superheat is too high.",
        solutions: [
          "P12S5 Adjust the expansion valve (superheat 4-6\u00b0C) (open a little).",
        ],
      },
      {
        name: "P12R6 Restricted or dirty filter.",
        solutions: ["P12S6 Clean the filter."],
      },
      {
        name: "P12R7 25% or more of the coils are clogged.",
        solutions: ["P12S7 Defrost."],
      },
    ],
  },
  {
    name: "P13 Oil temperature too low.",
    reasons: [
      {
        name: "P13R1 Too little oil in the compressor crankcase.",
        solutions: ["P13S1 Top up the oil."],
      },
      {
        name: "P13R2 The oil in the compressor crankcase is foaming.",
        solutions: ["P13S2 See P18."],
      },
      {
        name: "P13R3 Faulty oil pump.",
        solutions: ["P13S3 Repair or replace."],
      },
      {
        name: "P13R4 Worn bearings.",
        solutions: ["P13S4 Repair or replace."],
      },
    ],
  },
  {
    name: "P14 Discharge (high pressure) circuit temperature too high.",
    reasons: [
      {
        name: "P14R1: Suction temperature higher than normal due to low refrigerant gas supplied to the coils.",
        solutions: [
          "P14S1.1: Check the amount of refrigerant.",
          "P14S1.2: Check the expansion valves.",
        ],
      },
      {
        name: "P14R2: Discharge valves leaking.",
        solutions: [
          "P14S2: Replace damaged valves as leaking discharge valves cause the temperature to rise.",
        ],
      },
      {
        name: "P14R3: By-pass in the low and high pressure sides of the compressor.",
        solutions: ["P14S3: Locate the bypass and repair leaks."],
      },
    ],
  },
  {
    name: "P15: Discharge (high pressure) circuit temperature too low.",
    reasons: [
      {
        name: "P15R1: Suction temperature lower than normal due to excessive amount of liquid (phase) refrigerant passing through the coils.",
        solutions: [
          "P15S1: Adjust the expansion valve to increase superheat (close the valve a little).",
        ],
      },
    ],
  },
  {
    name: "P16: Oil level in the crankcase is decreasing.",
    reasons: [
      {
        name: "P16R1: Filter in the solenoid valve or nipple in the oil return line clogged.",
        solutions: [
          "P16S1: The oil return line should be hot during operation, clean the filter.",
        ],
      },
      {
        name: "P16R2: The liquid state of the refrigerant in the suction circuit and crankcase causes the oil to foam, which increases oil consumption.",
        solutions: ["P16S2: Check the coils and superheat of the suction gas."],
      },
      {
        name: "P16R3: Worn piston rings and cylinders.",
        solutions: ["P16S3: Replace worn elements."],
      },
      {
        name: "P16R4: Solenoid valve in the oil return circuit is faulty.",
        solutions: [
          "P16S4.1: Replace the coil if the solenoid valve coil is defective.",
          "P16S4.2: If there is no electrical control signal, check the electrical connections.",
        ],
      },
    ],
  },
  {
    name: "P17: It is not possible to discharge gas from the system.",
    reasons: [
      {
        name: "P17R1: Solenoid valve leaking.",
        solutions: ["P17S1: Find and repair the leak or replace the valve."],
      },
      {
        name: "P17R2: Damaged piston rings.",
        solutions: ["P17S2: Check and replace damaged parts."],
      },
      {
        name: "P17R3: Damaged discharge valves.",
        solutions: ["P17S3: Check and replace damaged parts."],
      },
      {
        name: "P17R4: Damaged suction valves.",
        solutions: ["P17S4: Check and replace damaged parts."],
      },
    ],
  },
  {
    name: "P18: Sweating or icing in the crankcase.",
    reasons: [
      {
        name: "P18R1: Refrigerant in liquid state in the suction circuit.",
        solutions: [
          "P18S1: Check the coils and superheat (expansion valve superheat setting), adjust the expansion valve (superheat 4-6\u00b0C) (close slightly).",
        ],
      },
      {
        name: "P18R2: The thermal sensor of the expansion valve is connected to the wrong place.",
        solutions: [
          "P18S2: Check the location of the thermal sensor and connect it to the correct place in the correct position.",
        ],
      },
      {
        name: "P18R3: Too much liquid refrigerant passing through the regulator (back pressure) valve.",
        solutions: [
          "P18S3: Increase superheat in the thermal expansion valve, close the expansion valve slightly.",
        ],
      },
    ],
  },
  {
    name: "P19 There is a refrigerant leak.",
    reasons: [
      {
        name: "P19R1: Mechanical seal leaking.",
        solutions: ["P19S1: Replace the shaft seal."],
      },
      {
        name: "P19R2: Leaks in valve glands and sight glass.",
        solutions: ["P19S2: Renew gaskets or seals."],
      },
      {
        name: "P19R3: Leak in condenser pipes.",
        solutions: ["P19S3: Repair the pipes."],
      },
      {
        name: "P19R4 Leak in the inlet or outlet connections of the expansion valve.",
        solutions: ["P19S4 Check the fasteners."],
      },
      {
        name: "P19R5 Leak in the coils.",
        solutions: ["P19S5 Repair or renew."],
      },
    ],
  },
  {
    name: "P20 Frosting on the suction (return) pipe of the compressor.",
    reasons: [
      {
        name: "P20R1 Expansion valve too open.",
        solutions: [
          "P20S1 Close the valve, adjust the superheat to 4-6\u00b0C.",
        ],
      },
      {
        name: "P20R2 Fans not working.",
        solutions: [
          "P20S2 Turn on the fans in the cooling chambers (normally the compressor should stop when the fans are not working).",
        ],
      },
      {
        name: "P20R3 Frosting or icing on the coils.",
        solutions: ["P20S3 Defrost."],
      },
    ],
  },
  {
    name: "P21 Bad smell.",
    reasons: [
      {
        name: "P21R1 Large amount of gas leakage.",
        solutions: ["P21S1 Find and fix the leak."],
      },
      {
        name: "P21R2 Overheated or burnt electrical equipment.",
        solutions: [
          "P21S2 Turn off the switch to find the equipment, check and replace if burnt.",
        ],
      },
    ],
  },
  {
    name: "P22 Insufficient or poor cooling.",
    reasons: [
      {
        name: "P22R1 Insufficient capacity.",
        solutions: ["P22S1 System change or new design."],
      },
      {
        name: "P22R2 Gas leak in the thermal sensor of the expansion valve.",
        solutions: ["P22S2 Replace expansion valve."],
      },
      {
        name: "P22R3 The thermal sensor of the expansion valve is attached to the wrong place or in the wrong position.",
        solutions: [
          "P22S3: Tightly mount the thermal sensor to the evaporator outlet and in a horizontal position.",
        ],
      },
      {
        name: "P22R4 Blockage in the dryer filter.",
        solutions: ["P22S4 Check the dryer filter, replace if necessary."],
      },
      {
        name: "P22R5 There is icing (frosting, freezing) in the expansion valve.",
        solutions: [
          "P22S5.1 Melt the ice in the expansion valve with a hot, damp cloth.",
          "P22S5.2 Check the dryer filter, replace if necessary.",
        ],
      },
      {
        name: "P22R6 Expansion valve clogged due to dirt.",
        solutions: ["P22S6 Clean the expansion valve and filter."],
      },
      {
        name: "P22R7 Expansion valve defective.",
        solutions: ["P22S7 Replace the valve with a new one."],
      },
      {
        name: "P22R8 Insufficient gas in the system.",
        solutions: ["P22S8 Charge the system with gas."],
      },
      {
        name: "P22R9 Insufficient amount of air in the evaporator.",
        solutions: ["P22S9 Check the fan motor speed and fan blades."],
      },
      {
        name: "P22R10 Frosting in the evaporator.",
        solutions: ["P22S10 Defrost the evaporator."],
      },
      {
        name: "P22R11 Partially closed valve forgotten in the system.",
        solutions: ["P22S11 Check and open all system valves."],
      },
      {
        name: "P22R12 Expansion valve less open than normal.",
        solutions: [
          "P22S12 Refrigerant flow entering the evaporator is low (superheat is high), open the expansion valve to adjust the superheat to 4-6\u00b0C.",
        ],
      },
      {
        name: "P22R13 Expansion valve is more open than normal.",
        solutions: [
          "P22S13 Refrigerant flow entering the evaporator is high (superheat is low), close the expansion valve to adjust the superheat to 4-6\u00b0C.",
        ],
      },
      {
        name: "P22R14 Excessively high condenser pressure.",
        solutions: ["P22S14 See P9."],
      },
      {
        name: "P22R15 Suction pressure too low.",
        solutions: ["P22S15 See P12."],
      },
    ],
  },
];
