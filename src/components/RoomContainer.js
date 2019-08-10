import React from "react";
import { withRoomConsumer } from "../Context";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from './Loading';

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);
