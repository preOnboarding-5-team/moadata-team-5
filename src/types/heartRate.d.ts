interface HeartRate {
  seq: number;
  member_seq: number;
  avg_beat: number;
  crt_ymdt: string;
}

type Data = {
  avg_beat: number;
  crt_ymdt: string;
};
