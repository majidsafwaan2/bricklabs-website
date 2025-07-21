export interface LibraryArticle {
  id: string
  title: string
  slug: string
  description: string
  category: string
  difficulty: string
  engineeringPrinciples: string[]
  externalLinks: {
    tutorials: string[]
    wikipedia: string[]
    youtube: string[]
  }
  partsList: string[]
  estimatedTime: string
  ageRange: string
}

export const libraryData: LibraryArticle[] = [
  {
    id: '1',
    title: 'Basic Gearbox with 3 Speeds',
    slug: 'basic-gearbox-3-speeds',
    description: 'Learn to build a simple 3-speed gearbox using different gear ratios. Understand mechanical advantage and torque multiplication.',
    category: 'gearboxes',
    difficulty: 'Beginner',
    engineeringPrinciples: ['Gear Ratios', 'Mechanical Advantage', 'Torque Multiplication', 'Power Transmission'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Technic-Gearbox/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Gear_ratio', 'https://en.wikipedia.org/wiki/Mechanical_advantage'],
      youtube: ['https://www.youtube.com/watch?v=JOLtS4VUcvQ']
    },
    partsList: ['Technic gears (8t, 16t, 24t, 40t)', 'Technic axles', 'Technic bricks', 'Technic beams'],
    estimatedTime: '2-3 hours',
    ageRange: '8+'
  },
  {
    id: '2',
    title: 'Pneumatic Excavator Arm',
    slug: 'pneumatic-excavator-arm',
    description: 'Build a working excavator arm using pneumatic cylinders. Explore fluid dynamics and hydraulic principles.',
    category: 'pneumatics',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Fluid Dynamics', 'Hydraulic Pressure', 'Mechanical Leverage', 'Force Multiplication'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Pneumatic-Excavator/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Pneumatics', 'https://en.wikipedia.org/wiki/Hydraulics'],
      youtube: ['https://www.youtube.com/watch?v=8B_2TqO6gYw']
    },
    partsList: ['Pneumatic cylinders', 'Air pump', 'Tubing', 'Technic beams', 'Pins'],
    estimatedTime: '4-6 hours',
    ageRange: '10+'
  },
  {
    id: '3',
    title: 'Differential Drive Robot',
    slug: 'differential-drive-robot',
    description: 'Create a robot that can turn by varying wheel speeds. Learn about differential steering and robotics.',
    category: 'robotics',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Differential Steering', 'Wheel Kinematics', 'Robot Control', 'Motor Synchronization'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Differential-Drive-Robot/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Differential_wheeled_robot'],
      youtube: ['https://www.youtube.com/watch?v=Q3C5sc8b3xM']
    },
    partsList: ['EV3 motors', 'EV3 brick', 'Wheels', 'Technic beams', 'Sensors'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '4',
    title: 'Suspension System for Vehicles',
    slug: 'suspension-system-vehicles',
    description: 'Build a realistic suspension system using springs and shock absorbers. Understand vehicle dynamics.',
    category: 'vehicles',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Spring Mechanics', 'Damping', 'Vehicle Dynamics', 'Shock Absorption'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Suspension-System/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Suspension_(vehicle)', 'https://en.wikipedia.org/wiki/Shock_absorber'],
      youtube: ['https://www.youtube.com/watch?v=9QFnYvO0_5k']
    },
    partsList: ['Springs', 'Technic beams', 'Pins', 'Wheels', 'Shock absorbers'],
    estimatedTime: '5-7 hours',
    ageRange: '14+'
  },
  {
    id: '5',
    title: 'Steering Mechanism',
    slug: 'steering-mechanism',
    description: 'Learn to build a rack-and-pinion steering system. Understand how real cars turn.',
    category: 'vehicles',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Rack and Pinion', 'Steering Geometry', 'Mechanical Linkage', 'Force Transfer'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Steering-System/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Rack_and_pinion'],
      youtube: ['https://www.youtube.com/watch?v=7WXeJ7HlM8g']
    },
    partsList: ['Rack gear', 'Pinion gear', 'Steering wheel', 'Technic beams', 'Pins'],
    estimatedTime: '2-3 hours',
    ageRange: '10+'
  },
  {
    id: '6',
    title: 'Conveyor Belt System',
    slug: 'conveyor-belt-system',
    description: 'Build a working conveyor belt for sorting and transporting objects. Learn about continuous motion.',
    category: 'machines',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Continuous Motion', 'Friction', 'Material Handling', 'Power Transmission'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Conveyor-Belt/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Conveyor_belt'],
      youtube: ['https://www.youtube.com/watch?v=H6H7wvy92AA']
    },
    partsList: ['Belts', 'Pulleys', 'Motors', 'Technic beams', 'Rollers'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '7',
    title: 'Color Sorting Machine',
    slug: 'color-sorting-machine',
    description: 'Create an automated machine that sorts objects by color using sensors and actuators.',
    category: 'robotics',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Sensor Integration', 'Automation', 'Color Detection', 'Mechanical Sorting'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Color-Sorting-Machine/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Color_sorting'],
      youtube: ['https://www.youtube.com/watch?v=2XJ_6Um5qJQ']
    },
    partsList: ['Color sensor', 'EV3 brick', 'Motors', 'Technic beams', 'Sorting mechanism'],
    estimatedTime: '6-8 hours',
    ageRange: '14+'
  },
  {
    id: '8',
    title: 'Crane with Winch System',
    slug: 'crane-winch-system',
    description: 'Build a functional crane with a motorized winch for lifting and lowering loads.',
    category: 'machines',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Pulley Systems', 'Load Lifting', 'Mechanical Advantage', 'Stability'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Crane/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Crane_(machine)', 'https://en.wikipedia.org/wiki/Pulley'],
      youtube: ['https://www.youtube.com/watch?v=KjB1xCWX52g']
    },
    partsList: ['Winch', 'String', 'Motors', 'Technic beams', 'Counterweights'],
    estimatedTime: '4-5 hours',
    ageRange: '12+'
  },
  {
    id: '9',
    title: 'Wind Turbine Generator',
    slug: 'wind-turbine-generator',
    description: 'Create a wind turbine that generates electricity. Learn about renewable energy and generators.',
    category: 'electronics',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Wind Energy', 'Electrical Generation', 'Aerodynamics', 'Energy Conversion'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Wind-Turbine/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Wind_turbine', 'https://en.wikipedia.org/wiki/Electrical_generator'],
      youtube: ['https://www.youtube.com/watch?v=QKxGRGxJhXY']
    },
    partsList: ['Generator', 'Blades', 'Technic beams', 'LEDs', 'Wires'],
    estimatedTime: '5-6 hours',
    ageRange: '14+'
  },
  {
    id: '10',
    title: 'Automatic Door System',
    slug: 'automatic-door-system',
    description: 'Build a door that opens automatically when someone approaches. Learn about proximity sensors.',
    category: 'sensors',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Proximity Sensing', 'Automation', 'Linear Motion', 'Sensor Control'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Automatic-Door/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Proximity_sensor'],
      youtube: ['https://www.youtube.com/watch?v=8KpDnCjKqBw']
    },
    partsList: ['Ultrasonic sensor', 'Motors', 'Technic beams', 'Door mechanism', 'EV3 brick'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '11',
    title: 'Ball Launcher Mechanism',
    slug: 'ball-launcher-mechanism',
    description: 'Create a device that launches balls using elastic energy. Understand projectile motion.',
    category: 'machines',
    difficulty: 'Beginner',
    engineeringPrinciples: ['Elastic Energy', 'Projectile Motion', 'Energy Storage', 'Force Transfer'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Ball-Launcher/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Projectile_motion', 'https://en.wikipedia.org/wiki/Elastic_energy'],
      youtube: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U']
    },
    partsList: ['Rubber bands', 'Technic beams', 'Pins', 'Balls', 'Trigger mechanism'],
    estimatedTime: '2-3 hours',
    ageRange: '8+'
  },
  {
    id: '12',
    title: 'Line Following Robot',
    slug: 'line-following-robot',
    description: 'Build a robot that follows a black line on a white surface using light sensors.',
    category: 'robotics',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Light Sensing', 'Feedback Control', 'Robot Navigation', 'PID Control'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Line-Following-Robot/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Line_follower'],
      youtube: ['https://www.youtube.com/watch?v=4MqB5HJBH5Q']
    },
    partsList: ['Light sensor', 'EV3 brick', 'Motors', 'Wheels', 'Technic beams'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '13',
    title: 'Hydraulic Arm',
    slug: 'hydraulic-arm',
    description: 'Create a robotic arm powered by water pressure. Learn about hydraulic systems.',
    category: 'pneumatics',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Hydraulic Pressure', 'Fluid Mechanics', 'Mechanical Arms', 'Force Multiplication'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Hydraulic-Arm/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Hydraulics', 'https://en.wikipedia.org/wiki/Robotic_arm'],
      youtube: ['https://www.youtube.com/watch?v=YlYEe0RuW0o']
    },
    partsList: ['Syringes', 'Tubing', 'Water', 'Technic beams', 'Pins'],
    estimatedTime: '4-5 hours',
    ageRange: '14+'
  },
  {
    id: '14',
    title: 'Solar Panel Tracker',
    slug: 'solar-panel-tracker',
    description: 'Build a device that automatically tracks the sun to maximize solar energy collection.',
    category: 'electronics',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Solar Tracking', 'Light Sensing', 'Automation', 'Energy Efficiency'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Solar-Tracker/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Solar_tracker'],
      youtube: ['https://www.youtube.com/watch?v=8KpDnCjKqBw']
    },
    partsList: ['Light sensors', 'Motors', 'Solar panel', 'Technic beams', 'EV3 brick'],
    estimatedTime: '5-6 hours',
    ageRange: '14+'
  },
  {
    id: '15',
    title: 'Gear Reduction System',
    slug: 'gear-reduction-system',
    description: 'Learn to build gear systems that reduce speed while increasing torque.',
    category: 'gearboxes',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Gear Reduction', 'Torque Multiplication', 'Speed Control', 'Power Transmission'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Gear-Reduction/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Gear_train'],
      youtube: ['https://www.youtube.com/watch?v=JOLtS4VUcvQ']
    },
    partsList: ['Various gears', 'Technic axles', 'Technic bricks', 'Motors'],
    estimatedTime: '2-3 hours',
    ageRange: '10+'
  },
  {
    id: '16',
    title: 'Touch Sensor Piano',
    slug: 'touch-sensor-piano',
    description: 'Create a musical instrument using touch sensors and sound output.',
    category: 'electronics',
    difficulty: 'Beginner',
    engineeringPrinciples: ['Touch Sensing', 'Sound Generation', 'User Interface', 'Digital Output'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Piano/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Touch_sensor'],
      youtube: ['https://www.youtube.com/watch?v=Q3C5sc8b3xM']
    },
    partsList: ['Touch sensors', 'EV3 brick', 'Speaker', 'Technic beams', 'Buttons'],
    estimatedTime: '2-3 hours',
    ageRange: '8+'
  },
  {
    id: '17',
    title: 'Automatic Transmission',
    slug: 'automatic-transmission',
    description: 'Build a complex gearbox that automatically shifts between different speeds.',
    category: 'gearboxes',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Automatic Shifting', 'Centrifugal Force', 'Gear Synchronization', 'Speed Sensing'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Automatic-Transmission/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Automatic_transmission'],
      youtube: ['https://www.youtube.com/watch?v=H6H7wvy92AA']
    },
    partsList: ['Centrifugal weights', 'Gears', 'Technic beams', 'Springs', 'Axles'],
    estimatedTime: '6-8 hours',
    ageRange: '16+'
  },
  {
    id: '18',
    title: 'Maze Solving Robot',
    slug: 'maze-solving-robot',
    description: 'Create a robot that can navigate through a maze using sensors and algorithms.',
    category: 'robotics',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Maze Algorithms', 'Sensor Fusion', 'Path Planning', 'Robot Navigation'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Maze-Solving-Robot/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Maze_solving_algorithm'],
      youtube: ['https://www.youtube.com/watch?v=2XJ_6Um5qJQ']
    },
    partsList: ['Ultrasonic sensors', 'Touch sensors', 'EV3 brick', 'Motors', 'Wheels'],
    estimatedTime: '8-10 hours',
    ageRange: '16+'
  },
  {
    id: '19',
    title: 'Pneumatic Gripper',
    slug: 'pneumatic-gripper',
    description: 'Build a robotic hand that can grasp objects using pneumatic pressure.',
    category: 'pneumatics',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Pneumatic Actuation', 'Gripping Mechanics', 'Force Control', 'Object Manipulation'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Pneumatic-Gripper/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Robotic_gripper'],
      youtube: ['https://www.youtube.com/watch?v=KjB1xCWX52g']
    },
    partsList: ['Pneumatic cylinders', 'Air pump', 'Tubing', 'Technic beams', 'Gripper fingers'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '20',
    title: 'LED Traffic Light',
    slug: 'led-traffic-light',
    description: 'Create a working traffic light system with automatic timing and LED indicators.',
    category: 'electronics',
    difficulty: 'Beginner',
    engineeringPrinciples: ['Timing Control', 'LED Control', 'Sequential Logic', 'Traffic Management'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Traffic-Light/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Traffic_light'],
      youtube: ['https://www.youtube.com/watch?v=QKxGRGxJhXY']
    },
    partsList: ['LEDs', 'EV3 brick', 'Technic beams', 'Wires', 'Timer mechanism'],
    estimatedTime: '2-3 hours',
    ageRange: '8+'
  },
  {
    id: '21',
    title: 'Crawler Vehicle',
    slug: 'crawler-vehicle',
    description: 'Build a tracked vehicle that can traverse rough terrain using tank treads.',
    category: 'vehicles',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Tracked Locomotion', 'Terrain Traversal', 'Traction', 'Vehicle Stability'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Crawler/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Tracked_vehicle'],
      youtube: ['https://www.youtube.com/watch?v=8KpDnCjKqBw']
    },
    partsList: ['Track links', 'Sprockets', 'Motors', 'Technic beams', 'Idler wheels'],
    estimatedTime: '4-5 hours',
    ageRange: '12+'
  },
  {
    id: '22',
    title: 'Sound Activated Robot',
    slug: 'sound-activated-robot',
    description: 'Create a robot that responds to sound commands using a microphone sensor.',
    category: 'sensors',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Sound Detection', 'Audio Processing', 'Robot Control', 'Voice Commands'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Sound-Activated-Robot/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Microphone'],
      youtube: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U']
    },
    partsList: ['Sound sensor', 'EV3 brick', 'Motors', 'Technic beams', 'Wheels'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '23',
    title: 'Mechanical Clock',
    slug: 'mechanical-clock',
    description: 'Build a working clock mechanism using gears and escapement.',
    category: 'machines',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Clock Mechanisms', 'Escapement', 'Time Measurement', 'Precision Engineering'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Clock/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Clock', 'https://en.wikipedia.org/wiki/Escapement'],
      youtube: ['https://www.youtube.com/watch?v=4MqB5HJBH5Q']
    },
    partsList: ['Clock hands', 'Gears', 'Escapement mechanism', 'Technic beams', 'Weights'],
    estimatedTime: '6-8 hours',
    ageRange: '16+'
  },
  {
    id: '24',
    title: 'Temperature Monitoring System',
    slug: 'temperature-monitoring-system',
    description: 'Create a system that monitors temperature and displays readings on an LCD screen.',
    category: 'sensors',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Temperature Sensing', 'Data Display', 'Environmental Monitoring', 'Sensor Calibration'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Temperature-Monitor/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Temperature_sensor'],
      youtube: ['https://www.youtube.com/watch?v=YlYEe0RuW0o']
    },
    partsList: ['Temperature sensor', 'LCD display', 'EV3 brick', 'Technic beams', 'Wires'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '25',
    title: 'Windmill with Generator',
    slug: 'windmill-generator',
    description: 'Build a traditional windmill that generates electricity from wind power.',
    category: 'electronics',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Wind Energy', 'Electrical Generation', 'Mechanical Power', 'Energy Conversion'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-Windmill/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Windmill'],
      youtube: ['https://www.youtube.com/watch?v=QKxGRGxJhXY']
    },
    partsList: ['Generator', 'Windmill blades', 'Technic beams', 'LEDs', 'Wires'],
    estimatedTime: '4-5 hours',
    ageRange: '12+'
  },
  {
    id: '26',
    title: 'Pneumatic Lift System',
    slug: 'pneumatic-lift-system',
    description: 'Create a lifting platform powered by pneumatic cylinders.',
    category: 'pneumatics',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Pneumatic Lifting', 'Scissor Mechanism', 'Load Distribution', 'Stability'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Pneumatic-Lift/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Scissor_lift'],
      youtube: ['https://www.youtube.com/watch?v=KjB1xCWX52g']
    },
    partsList: ['Pneumatic cylinders', 'Air pump', 'Tubing', 'Technic beams', 'Scissor mechanism'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '27',
    title: 'Remote Control Car',
    slug: 'remote-control-car',
    description: 'Build a car that can be controlled remotely using infrared signals.',
    category: 'vehicles',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Remote Control', 'Infrared Communication', 'Vehicle Control', 'Signal Processing'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/LEGO-RC-Car/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Remote_control'],
      youtube: ['https://www.youtube.com/watch?v=H6H7wvy92AA']
    },
    partsList: ['IR sensor', 'IR remote', 'Motors', 'Technic beams', 'Wheels'],
    estimatedTime: '5-6 hours',
    ageRange: '14+'
  },
  {
    id: '28',
    title: 'Automatic Feeder',
    slug: 'automatic-feeder',
    description: 'Create a device that automatically dispenses food at set intervals.',
    category: 'machines',
    difficulty: 'Beginner',
    engineeringPrinciples: ['Timing Mechanisms', 'Material Dispensing', 'Automation', 'Reliability'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Automatic-Feeder/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Pet_feeder'],
      youtube: ['https://www.youtube.com/watch?v=2XJ_6Um5qJQ']
    },
    partsList: ['Timer mechanism', 'Hopper', 'Dispensing mechanism', 'Technic beams', 'Container'],
    estimatedTime: '2-3 hours',
    ageRange: '8+'
  },
  {
    id: '29',
    title: 'Light Following Robot',
    slug: 'light-following-robot',
    description: 'Build a robot that follows the brightest light source using light sensors.',
    category: 'robotics',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Light Sensing', 'Robot Navigation', 'Light Tracking', 'Behavioral Robotics'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Light-Following-Robot/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Phototaxis'],
      youtube: ['https://www.youtube.com/watch?v=4MqB5HJBH5Q']
    },
    partsList: ['Light sensors', 'EV3 brick', 'Motors', 'Wheels', 'Technic beams'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '30',
    title: 'Mechanical Calculator',
    slug: 'mechanical-calculator',
    description: 'Create a simple mechanical calculator that can perform basic arithmetic operations.',
    category: 'machines',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Mechanical Computing', 'Number Systems', 'Gear Counting', 'Digital Logic'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Mechanical-Calculator/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Mechanical_calculator'],
      youtube: ['https://www.youtube.com/watch?v=YlYEe0RuW0o']
    },
    partsList: ['Number wheels', 'Gears', 'Technic beams', 'Display mechanism', 'Input dials'],
    estimatedTime: '8-10 hours',
    ageRange: '16+'
  },
  {
    id: '31',
    title: 'Ultrasonic Distance Sensor',
    slug: 'ultrasonic-distance-sensor',
    description: 'Build a device that measures distance using ultrasonic sound waves.',
    category: 'sensors',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Ultrasonic Sensing', 'Distance Measurement', 'Sound Waves', 'Time of Flight'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Ultrasonic-Sensor/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Ultrasonic_sensor'],
      youtube: ['https://www.youtube.com/watch?v=QKxGRGxJhXY']
    },
    partsList: ['Ultrasonic sensor', 'EV3 brick', 'Display', 'Technic beams', 'Wires'],
    estimatedTime: '2-3 hours',
    ageRange: '10+'
  },
  {
    id: '32',
    title: 'Pneumatic Sorting Machine',
    slug: 'pneumatic-sorting-machine',
    description: 'Create a machine that sorts objects by size using pneumatic cylinders.',
    category: 'pneumatics',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Size Sorting', 'Pneumatic Actuation', 'Mechanical Sorting', 'Automation'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Pneumatic-Sorter/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Sorting_algorithm'],
      youtube: ['https://www.youtube.com/watch?v=KjB1xCWX52g']
    },
    partsList: ['Pneumatic cylinders', 'Air pump', 'Tubing', 'Sorting mechanism', 'Technic beams'],
    estimatedTime: '5-6 hours',
    ageRange: '14+'
  },
  {
    id: '33',
    title: 'Gear Pump',
    slug: 'gear-pump',
    description: 'Build a pump that moves fluid using rotating gears.',
    category: 'machines',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Fluid Pumping', 'Gear Mechanics', 'Fluid Dynamics', 'Positive Displacement'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Gear-Pump/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Gear_pump'],
      youtube: ['https://www.youtube.com/watch?v=H6H7wvy92AA']
    },
    partsList: ['Gears', 'Housing', 'Inlet/outlet', 'Technic beams', 'Seals'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '34',
    title: 'Touch Sensor Game',
    slug: 'touch-sensor-game',
    description: 'Create an interactive game using touch sensors and sound feedback.',
    category: 'electronics',
    difficulty: 'Beginner',
    engineeringPrinciples: ['Game Design', 'Touch Sensing', 'Sound Feedback', 'User Interaction'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Touch-Game/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Game_design'],
      youtube: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U']
    },
    partsList: ['Touch sensors', 'EV3 brick', 'Speaker', 'Technic beams', 'Game board'],
    estimatedTime: '2-3 hours',
    ageRange: '8+'
  },
  {
    id: '35',
    title: 'Automatic Garage Door',
    slug: 'automatic-garage-door',
    description: 'Build a garage door that opens and closes automatically using sensors.',
    category: 'sensors',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Automation', 'Safety Sensors', 'Linear Motion', 'Door Mechanisms'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Garage-Door/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Garage_door'],
      youtube: ['https://www.youtube.com/watch?v=8KpDnCjKqBw']
    },
    partsList: ['Touch sensors', 'Motors', 'Door mechanism', 'Technic beams', 'Safety stops'],
    estimatedTime: '4-5 hours',
    ageRange: '12+'
  },
  {
    id: '36',
    title: 'Mechanical Music Box',
    slug: 'mechanical-music-box',
    description: 'Create a music box that plays tunes using a rotating cylinder with pins.',
    category: 'machines',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Musical Mechanics', 'Pin Cylinder', 'Sound Production', 'Timing'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Music-Box/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Music_box'],
      youtube: ['https://www.youtube.com/watch?v=4MqB5HJBH5Q']
    },
    partsList: ['Cylinder with pins', 'Tines', 'Crank mechanism', 'Technic beams', 'Housing'],
    estimatedTime: '4-5 hours',
    ageRange: '12+'
  },
  {
    id: '37',
    title: 'Solar Car',
    slug: 'solar-car',
    description: 'Build a car powered entirely by solar energy using solar panels.',
    category: 'electronics',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Solar Power', 'Energy Storage', 'Vehicle Design', 'Energy Efficiency'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Solar-Car/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Solar_car'],
      youtube: ['https://www.youtube.com/watch?v=QKxGRGxJhXY']
    },
    partsList: ['Solar panels', 'Motors', 'Wheels', 'Technic beams', 'Energy storage'],
    estimatedTime: '5-6 hours',
    ageRange: '14+'
  },
  {
    id: '38',
    title: 'Pneumatic Robot Arm',
    slug: 'pneumatic-robot-arm',
    description: 'Create a multi-jointed robotic arm powered by pneumatic cylinders.',
    category: 'pneumatics',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Robotic Arms', 'Joint Mechanics', 'Pneumatic Control', 'End Effectors'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Pneumatic-Arm/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Robotic_arm'],
      youtube: ['https://www.youtube.com/watch?v=YlYEe0RuW0o']
    },
    partsList: ['Multiple cylinders', 'Air pump', 'Tubing', 'Joints', 'Technic beams'],
    estimatedTime: '6-8 hours',
    ageRange: '16+'
  },
  {
    id: '39',
    title: 'Gear Differential',
    slug: 'gear-differential',
    description: 'Build a differential gear system that allows wheels to rotate at different speeds.',
    category: 'gearboxes',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Differential Gears', 'Wheel Speed Control', 'Vehicle Dynamics', 'Power Distribution'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Gear-Differential/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Differential_(mechanical_device)'],
      youtube: ['https://www.youtube.com/watch?v=JOLtS4VUcvQ']
    },
    partsList: ['Differential gears', 'Axles', 'Wheels', 'Technic beams', 'Housing'],
    estimatedTime: '4-5 hours',
    ageRange: '14+'
  },
  {
    id: '40',
    title: 'Light Sensor Night Light',
    slug: 'light-sensor-night-light',
    description: 'Create a night light that automatically turns on when it gets dark.',
    category: 'sensors',
    difficulty: 'Beginner',
    engineeringPrinciples: ['Light Sensing', 'Automatic Control', 'LED Control', 'Environmental Response'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Night-Light/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Night_light'],
      youtube: ['https://www.youtube.com/watch?v=2XJ_6Um5qJQ']
    },
    partsList: ['Light sensor', 'LEDs', 'EV3 brick', 'Technic beams', 'Housing'],
    estimatedTime: '2-3 hours',
    ageRange: '8+'
  },
  {
    id: '41',
    title: 'Mechanical Computer',
    slug: 'mechanical-computer',
    description: 'Build a simple mechanical computer that can perform basic calculations.',
    category: 'machines',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Mechanical Computing', 'Binary Logic', 'Gear Counting', 'Digital Systems'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Mechanical-Computer/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Mechanical_computer'],
      youtube: ['https://www.youtube.com/watch?v=YlYEe0RuW0o']
    },
    partsList: ['Logic gates', 'Gears', 'Display mechanism', 'Technic beams', 'Input mechanism'],
    estimatedTime: '10-12 hours',
    ageRange: '16+'
  },
  {
    id: '42',
    title: 'Pneumatic Compressor',
    slug: 'pneumatic-compressor',
    description: 'Create a device that compresses air for use in pneumatic systems.',
    category: 'pneumatics',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Air Compression', 'Pressure Generation', 'Mechanical Power', 'Energy Storage'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Air-Compressor/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Air_compressor'],
      youtube: ['https://www.youtube.com/watch?v=KjB1xCWX52g']
    },
    partsList: ['Compression chamber', 'Pistons', 'Valves', 'Technic beams', 'Pressure gauge'],
    estimatedTime: '6-8 hours',
    ageRange: '16+'
  },
  {
    id: '43',
    title: 'Touch Sensor Lock',
    slug: 'touch-sensor-lock',
    description: 'Build a combination lock that opens when the correct sequence is entered.',
    category: 'sensors',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Security Systems', 'Touch Sensing', 'Sequential Logic', 'Lock Mechanisms'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Touch-Lock/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Combination_lock'],
      youtube: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U']
    },
    partsList: ['Touch sensors', 'Lock mechanism', 'EV3 brick', 'Technic beams', 'Display'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '44',
    title: 'Gear Clockwork',
    slug: 'gear-clockwork',
    description: 'Create a complex clockwork mechanism with multiple moving parts.',
    category: 'machines',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Clockwork Mechanics', 'Gear Trains', 'Timing Systems', 'Precision Engineering'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Clockwork/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Clockwork'],
      youtube: ['https://www.youtube.com/watch?v=4MqB5HJBH5Q']
    },
    partsList: ['Clockwork gears', 'Springs', 'Escapement', 'Technic beams', 'Moving parts'],
    estimatedTime: '8-10 hours',
    ageRange: '16+'
  },
  {
    id: '45',
    title: 'Ultrasonic Parking Sensor',
    slug: 'ultrasonic-parking-sensor',
    description: 'Build a parking sensor that warns when objects are too close.',
    category: 'sensors',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Distance Sensing', 'Safety Systems', 'Warning Alerts', 'Proximity Detection'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Parking-Sensor/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Parking_sensor'],
      youtube: ['https://www.youtube.com/watch?v=QKxGRGxJhXY']
    },
    partsList: ['Ultrasonic sensor', 'Speaker', 'EV3 brick', 'Technic beams', 'Warning lights'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '46',
    title: 'Pneumatic Hammer',
    slug: 'pneumatic-hammer',
    description: 'Create a hammer that strikes using pneumatic power.',
    category: 'pneumatics',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Impact Mechanics', 'Pneumatic Actuation', 'Force Generation', 'Tool Design'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Pneumatic-Hammer/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Pneumatic_hammer'],
      youtube: ['https://www.youtube.com/watch?v=KjB1xCWX52g']
    },
    partsList: ['Pneumatic cylinder', 'Hammer head', 'Air pump', 'Technic beams', 'Striking mechanism'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '47',
    title: 'Light Sensor Security System',
    slug: 'light-sensor-security-system',
    description: 'Build a security system that detects movement using light sensors.',
    category: 'sensors',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Security Systems', 'Light Detection', 'Alarm Systems', 'Motion Sensing'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Security-System/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Security_alarm'],
      youtube: ['https://www.youtube.com/watch?v=2XJ_6Um5qJQ']
    },
    partsList: ['Light sensors', 'Alarm', 'EV3 brick', 'Technic beams', 'Detection zone'],
    estimatedTime: '4-5 hours',
    ageRange: '14+'
  },
  {
    id: '48',
    title: 'Mechanical Counter',
    slug: 'mechanical-counter',
    description: 'Create a device that counts events using mechanical gears.',
    category: 'machines',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Mechanical Counting', 'Gear Ratios', 'Number Display', 'Event Detection'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Mechanical-Counter/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Counter_(digital)'],
      youtube: ['https://www.youtube.com/watch?v=H6H7wvy92AA']
    },
    partsList: ['Counting gears', 'Display wheels', 'Trigger mechanism', 'Technic beams', 'Reset mechanism'],
    estimatedTime: '3-4 hours',
    ageRange: '12+'
  },
  {
    id: '49',
    title: 'Pneumatic Door Opener',
    slug: 'pneumatic-door-opener',
    description: 'Build a system that automatically opens doors using pneumatic power.',
    category: 'pneumatics',
    difficulty: 'Intermediate',
    engineeringPrinciples: ['Door Automation', 'Pneumatic Actuation', 'Safety Systems', 'Access Control'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Door-Opener/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Automatic_door'],
      youtube: ['https://www.youtube.com/watch?v=8KpDnCjKqBw']
    },
    partsList: ['Pneumatic cylinder', 'Door mechanism', 'Air pump', 'Technic beams', 'Safety sensors'],
    estimatedTime: '4-5 hours',
    ageRange: '12+'
  },
  {
    id: '50',
    title: 'Gear Speedometer',
    slug: 'gear-speedometer',
    description: 'Create a speedometer that measures and displays speed using gears.',
    category: 'gearboxes',
    difficulty: 'Advanced',
    engineeringPrinciples: ['Speed Measurement', 'Gear Ratios', 'Display Systems', 'Calibration'],
    externalLinks: {
      tutorials: ['https://www.instructables.com/Speedometer/'],
      wikipedia: ['https://en.wikipedia.org/wiki/Speedometer'],
      youtube: ['https://www.youtube.com/watch?v=JOLtS4VUcvQ']
    },
    partsList: ['Speed gears', 'Display mechanism', 'Wheel connection', 'Technic beams', 'Calibration system'],
    estimatedTime: '5-6 hours',
    ageRange: '14+'
  }
] 